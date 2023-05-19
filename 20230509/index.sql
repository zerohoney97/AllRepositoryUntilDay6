SHOW DATABASES;
USE toy_board;

SELECT * FROM board;
DESC board;
DELETE FROM board where id=40;
CREATE TABLE board(id INT PRIMARY KEY AUTO_INCREMENT,title VARCHAR(40),content TEXT,nickName VARCHAR(40),`like` INT DEFAULT 0,likeId VARCHAR(255),img VARCHAR(255),userId INT);

ALTER TABLE board ADD foreUserId INT;

ALTER TABLE board ADD CONSTRAINT fk_toy_user FOREIGN KEY (foreUserId) REFERENCES users (id);
SELECT board.id,board.title,board.content,board.like,board.likeId,board.img FROM board INNER JOIN users ON users.id=board.`foreUserId` WHERE users.id=6;
