# Synopsis [![Build Status](https://travis-ci.org/jnthn/test-mock.svg?branch=master)](https://travis-ci.org/jnthn/test-mock)

    use Test;
    use Test::Mock;
    
    plan 2;
    
    class Foo {
        method lol() { 'rofl' }
        method wtf() { 'oh ffs' }
    }
    
    my $x = mocked(Foo);
    
    $x.lol();
    $x.lol();
    
    check-mock($x,
        *.called('lol', times => 2),
        *.never-called('wtf'),
    );

# Details

Test::Mock is a module that works alongside the standard Test module to
help you write tests when you want to verify what methods are called on
an object, while still having calls to undefined methods die.

You get started just as normal with the test file, but also add a use
statement for Test::Mock.

    use Test;
    use Test::Mock;
    
    plan 2;

Imagine we have some class Foo:

    class Foo {
        method lol() { 'rofl' }
        method wtf() { 'oh ffs' }
    }

We then arrange to have a mocked instance of this class. This means that
instead of calls to lol and wtf actually resulting in the methods being
invoked, it simply logs the invocations.

    my $x = mocked(Foo);

We can then take the actions that should result in some method calls.
Here we just make them directly, but you'd probably pass the mock to
other bits of code that will make calls on it.

    $x.lol();
    $x.lol();

When you're done, you assert that the things you expected to happen
actually happened.

    check-mock($x,
        *.called('lol', times => 2),
        *.never-called('wtf'),
    );

And it's as easy as that. Of course, you may also be interested to check
that the arguments passed to the mocked method were as expected. For our
second example, here's a class representing one of my favorite places.

    class Pub {
        method order_beer($pints) { }
        method throw($what) { }
    }

We'll also declare a couple of other classes:

    class Glass { }
    class Party { }

Our test file would have started with the same boilerplate - use Test and
Test::Mock, and set a plan. We then produce a mock instance of Pub:

    my $p = mocked(Pub);

And do our stuff:

    $p.throw(Party.new);
    $p.order_beer(2);
    $p.order_beer(1);

After our excruciatingly low on beer party, we can now do some checks. Of
course, we ordered beer twice, so we can check this as before:

    check-mock($p,
        *.called('order_beer', times => 2),

But what if we wanted to check the arguments passed to the method? In that
case, you can simply pass along the parameter "with". We may pass a Capture
here, which contains the exact arguments we expected to be passed; this will
be tested against the actual passed Capture for equivalance.

      *.called('order_beer', times => 1, with => \(1)),
      *.called('order_beer', times => 1, with => \(2)),
      *.never-called('order_beer', with => \(10)),

That's going to cover some cases, but what if we wanted to check if things of
the correct type were passed? In that case, write a Signature literal, and the
args Capture will be smart-matched against it, which conveniently happens to
check if the Capture could have bound to this Signature.

    *.called('throw', with => :(Party)),
    *.never-called('throw', with => :(Glass)),

Of course, now the gloves are off: if you have a Signature you can do all kinds
of matching, with constraints and sub-signatures. Here's an easy but not so
creative example (I need at least 3 pints to be creative...)

      *.called('order_beer', times => 2, with => :($ where { $^n < 10 })),
      *.never-called('order_beer', with => :($ where { $^n >= 10 })),

And if all that isn't enough, since we just smart-match against anything else
you may pass as the with argument, you may also pass a block that takes a
Capture as a parameter and implement whatever fancier checks you may wish to.

In some cases, just logging method calls on your mock may not be enough; you
may wish them to return some fake data from the method call. For example, we
may have a yak shaving class that we dependency-inject with a yak provider
and a yak shaver.

    class Yak {
        has $.shaved;
    }
    
    class Shaver {
        method shave($yak) {
            ...
        }
    }
    
    class YakStore {
        method get-all-yaks() {
            ...
        }
    }
    
    class YakShaving {
        has $.yak-store;
        has $.yak-shaver;
        
        method proccess() {
            for $!yak-store.get-all-yaks() -> $yak {
                unless $yak.shaved {
                    $!yak-shaver.shave($yak);
                }
            }
        }
    }

We want to check that our the shave method from the Shaver class is only
invoked for yaks that need shaving. We set up our mock of the Shaver class
just as normal:

    my $shaver = mocked(Shaver);

However, for the Yak store we want to provide some fake yaks in various
states of shavenness.

    my $store = mocked(YakStore, returning => {
        get-all-yaks => (Yak.new(:!shaved), Yak.new(:shaved), Yak.new(:!shaved))
    });

Now we can inject our mocks to the YakShaving class and and get it to do
it's thing.

    my $yaktivity = YakShaving.new(
        yak-store => $store,
        yak-shaver => $shaver
    );
    $yaktivity.proccess();

And finally, it's time to write our tests. We expect just one call on the
store:

    check-mock($store,
        *.called('get-all-yaks', times => 1)
    );

On the shaver, we expect two calls in total to the shave method with yaks
that are unshaven, and no calls at all with shaven yaks.

    check-mock($shaver,
        *.called('shave', times => 2, with => :($ where { !$^y.shaved })),
        *.never-called('shave', with => :($ where { $^y.shaved }))
    );

This is the first example where we're really made good use of mock testing;
if absolutely every object involved in the test is mocked, then you'd not be
testing any of the actual real code. Of course, being able to do this easily
somewhat depends on good de-coupled code design, where objects are given
instances of other objects to work on rather than directly instantiating
objects of other classes.

Sometimes, it would be nice to fake an exception or do some other computation
rather than return a literal value. For that, use `computing` instead of using
`returning`. Our previous example would look like this:

    my $store = mocked(YakStore, computing => {
        get-all-yaks => { Yak.new(:!shaved), Yak.new(:shaved), Yak.new(:!shaved) }
    });

However, unlike with `returning`, it's possible to instead do:

    my $store = mocked(YakStore, computing => {
        get-all-yaks => { die "Could not connect to yak-db" }
    });

Occasionally, it is also desirable to have access to the arguments passed to
method. In this case, use `overriding`:

    my $shaver = mocked(Shaver, overriding => {
        shave => -> $yak { die 'Already shaven' if $yak.shaved }
    });
    
Of course, you can use `returning`, `computing` and `overriding` in a call to `mocked` to get different behaviours for different methods, as long as each method name only occurs once.

Feature requests, bug reports and patches on this module are welcome; use
the GitHub issues tracker.
