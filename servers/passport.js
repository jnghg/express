const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user.js');

module.exports = () => {
  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    done(null, user._id); // 여기의 user._id가 req.session.passport.user에 저장
  });

  passport.deserializeUser((id, done) => { // 매개변수 id는 req.session.passport.user에 저장된 값
    User.findById(id, (err, user) => {
      done(null, user); // 여기의 user가 req.user가 됨
    });
  });

  // local 전략
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true, // 세션에 저장 여부
    passReqToCallback: true, // true시 맨 앞 req인자값 포함 callback
  }, 
  (req, email, password, done) => {

    User.findOne({ email: email }, (findError, user) => {
      console.log('user :', user);
      // 서버 에러 처리
      if (findError) {
        return done(findError);
      };

      // 임의 에러 처리
      if (!user) {
        console.log('존재하지않는 ID');
        return done(null, false, { message: '존재하지 않는 아이디입니다' });
      }
      return user.comparePassword(password, (passError, isMatch) => {
        console.log('검증결과: ', isMatch);
        if (isMatch) {
          return done(null, user); // 검증 성공
        }
        console.log('비밀번호 틀림');
        return done(null, false, { message: '비밀번호가 틀렸습니다' });
      });
    });
  }));
};