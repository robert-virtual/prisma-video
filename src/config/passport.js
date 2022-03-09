const passport = require("passport");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const JwtStrategy = require("passport-jwt").Strategy,
  { ExtractJwt } = require("passport-jwt");

var opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net";
passport.use(new JwtStrategy(opts, fn));

async function fn(jwt_payload, done) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: jwt_payload.sub,
      },
    });
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}

exports.passport = passport;
