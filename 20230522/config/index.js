const config = {
  dev: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE2,
    host: process.env.HOST, //나중에 배포를 하게 된다면 데이터베이스 주소를 입력해줄 예정
    dialect: "mysql",
  },
};

module.exports = config;
