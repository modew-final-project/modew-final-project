const express = require("express");
const app = express();
const port = 3002;
// 필요한 라이브러리 import
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const multer = require("multer");
const path = require("path");
const fs = require("fs");

// 파일 업로드 중복체크 multer 설정
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // 업로드 파일의 저장 경로 설정
      cb(null, "C:/Users/smhrd/modew-final-project/public/filefolder");
    },
    filename: function (req, file, cb) {
      // 업로드된 파일 이름 설정
      const originalName = file.originalname;
      const extension = path.extname(originalName);
      const baseName = path.basename(originalName, extension);

      let count = 0;
      let fileName = baseName + extension;

      // 파일 이름 중복 방지를 위한 카운트 추가
      while (
        fs.existsSync(
          "C:/Users/smhrd/modew-final-project/public/filefolder/" + fileName
        )
      ) {
        count++;
        fileName = baseName + "_" + count + extension;
      }

      req.fileName = fileName;
      cb(null, fileName);
    },
  }),
});
// 파일 수정 multer 설정
const update = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // 수정할 PDF 파일의 저장 경로 설정
      cb(null, "C:/Users/smhrd/modew-final-project/public/filefolder");
    },
    filename: function (req, file, cb) {
      // 수정할 PDF 파일 이름 설정
      cb(null, file.originalname);
    },
  }),
});

// 데이터베이스 연결 설정
var connection = mysql.createConnection({
  host: "project-db-stu.ddns.net",
  user: "smhrd_A_5",
  password: "smhrd5",
  database: "smhrd_A_5",
  port: 3307, // 명시적으로 3307번 포트를 사용
});

// 데이터베이스 연결
connection.connect();

// express 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

// 유저 정보를 저장하는 API
app.post("/user", (req, res) => {
  const { email, pw, name, birthday, tel, date } = req.body;

  // 유저 정보를 데이터베이스에 저장하는 코드
  connection.query(
    "INSERT INTO `User` (Email, Pw, Name, Birthday, Tel, Date) VALUES (?, ?, ?, ?, ?, NOW())",
    [email, pw, name, birthday, tel, date],
    function (err, rows, fields) {
      if (err) {
        console.log("DB저장 실패");

        // 회원가입 실패 메시지 클라이언트 쪽으로 전송
        res.status(500).json({ message: "회원가입 실패!" });
      } else {
        console.log("DB저장 성공");

        // 회원가입 성공 메시지 클라이언트 쪽으로 전송
        res.status(200).json({ message: "회원가입 성공!" });
      }
    }
  );
});

// google_user 정보를 저장하는 API
app.post("/google_user", (req, res) => {
  const { email, pw, name } = req.body;

  // 이메일 중복 체크를 위한 SELECT 쿼리
  connection.query(
    "SELECT * FROM `User` WHERE Email = ?",
    [email],
    function (err, rows, fields) {
      if (err) {
      } else if (rows.length > 0) {
        console.log("구글 계정 로그인 성공");
      } else {
        // 이메일이 존재하지 않으므로 INSERT 쿼리 실행
        connection.query(
          "INSERT INTO `User` (Email, Pw, Name, Birthday, Tel, Date) VALUES (?, ?, ?, '000000-0000000', '010-0000-0000', NOW())",
          [email, pw, name],
          function (err, rows, fields) {
            if (err) {
              console.log("구글 계정 DB저장 실패");
            } else {
              console.log("구글 계정 DB저장 성공");
            }
          }
        );
      }
    }
  );
});

// PDF 파일을 저장하는 API
app.post(
  "/pdfupload",
  upload.fields([{ name: "pdf" }, { name: "image" }]),
  (req, res) => {
    const { email } = req.body;
    const { user_filename } = req.body;
    const { pdf, image } = req.files;
    const pdfFileName = req.files.pdf[0].filename;
    const imageFileName = req.files.image[0].filename;
    const tempDataString = req.body.tempDataString; // JSON 형태의 문자열로 받아옴
    const tempData = JSON.parse(tempDataString); // JSON 형태의 문자열을 객체로 변환

    connection.query(
      "INSERT INTO `FileList` (uploader_email, file_name, image_name, user_filename, tempData) VALUES (?, ?, ?, ?, ?)",
      [
        email,
        pdfFileName,
        imageFileName,
        user_filename,
        JSON.stringify(tempData),
      ], // tempData 값을 문자열로 변환하여 DB에 저장
      function (err, rows, fields) {
        if (err) {
          console.log("DB저장 실패");
          res.status(500).json({ message: "파일 저장 실패!" });
        } else {
          console.log("DB저장 성공");
          res.status(200).json({ message: "파일 저장 성공!" });
        }
      }
    );
  }
);

// PDF 파일을 수정하는 API
app.post(
  "/pdfupdate",
  update.fields([{ name: "pdf" }, { name: "image" }]),
  (req, res) => {
    const { email } = req.body;
    const { user_filename } = req.body;
    const { pdf, image } = req.files;
    const pdfFileName = req.files.pdf[0].filename;
    const imageFileName = req.files.image[0].filename;
    const tempDataString = req.body.tempDataString; // JSON 형태의 문자열로 받아옴
    const tempData = JSON.parse(tempDataString); // JSON 형태의 문자열을 객체로 변환

    connection.query(
      "UPDATE `FileList` SET user_filename = ?, tempData = ? WHERE file_name = ?",
      [user_filename, JSON.stringify(tempData), pdfFileName], // tempData 값을 문자열로 변환하여 DB에 저장
      function (err, rows, fields) {
        if (err) {
          console.log("DB저장 실패");
          res.status(500).json({ message: "파일 저장 실패!" });
        } else {
          console.log("DB저장 성공");
          res.status(200).json({ message: "파일 저장 성공!" });
        }
      }
    );
  }
);

// 파일 업로드 API
app.post("/fileupload", upload.single("myFile"), (req, res) => {
  const email = req.body.email; // 클라이언트로부터 전송된 이메일 정보

  const file = req.file; // 업로드된 파일 정보
  const fileName = req.file.filename; // 저장된 파일 이름

  // 데이터베이스에 저장될 파일 이름
  const dbFileName = "my_custom_file_name" + path.extname(fileName);

  // 파일 정보를 데이터베이스에 저장하는 코드
  connection.query(
    "INSERT INTO FileList (file_name, uploader_email) VALUES (?, ?)",
    [fileName, email], // SQL 쿼리에 전달될 값
    function (err, rows, fields) {
      if (err) {
        console.log("DB저장 실패");
        res.status(500).json({ message: "파일 저장 실패!" }); // HTTP 응답으로 클라이언트에게 실패 메시지 전송
      } else {
        console.log("DB저장 성공");
        res.status(200).json({ message: "파일 저장 성공!" }); // HTTP 응답으로 클라이언트에게 성공 메시지 전송
      }
    }
  );
});

// public 디렉토리를 정적 파일로 제공하기 위한 미들웨어 추가
app.use(express.static("public"));

// 파일 목록 조회 API
app.get("/filelist/:email", (req, res) => {
  const email = req.params.email; // 클라이언트로부터 전송된 이메일 정보

  connection.query(
    "SELECT file_name, upload_date, image_name, user_filename, tempData FROM FileList WHERE uploader_email = ?", // SQL 쿼리문
    [email], // SQL 쿼리에 전달될 값
    (err, rows, fields) => {
      if (err) {
        console.log("DB조회 실패");
        res.status(500).json({ message: "파일목록 조회 실패!" });
      } else {
        console.log("DB조회 성공");

        const fileUrlPrefix = "/fileforder/"; // 파일이 위치한 경로
        const fileList = rows.map((row) => ({
          file_name: row.file_name,
          upload_date: row.upload_date,
          image_name: row.image_name,
          user_filename: row.user_filename,
          pdfurl: fileUrlPrefix + encodeURIComponent(row.file_name), // 파일이 위치한 경로와 파일 이름을 결합하여 pdfurl 생성
          tempData: JSON.stringify(row.tempData),
        }));

        res.status(200).json(fileList);
      }
    }
  );
});

// 맞춤법 검사
const hanspell = require("hanspell");

app.post("/spellCheck", (req, res) => {
  const { check1, check2, check3 } = req.body;
  const end = function () {
    console.log("// check ends");
  };
  const error = function (err) {
    console.error("// error: " + err);
  };
  let corrected = {};

  const check1Promise = new Promise((resolve, reject) => {


      hanspell.spellCheckByPNU(check1, 6000, (result) => {
        corrected.check1 = result
          .map((correction) => `${correction.token}: ${correction.suggestions.join(", ")}`)
          .join("\n");
        resolve();
      }, end, reject);

  });

  const check2Promise = new Promise((resolve, reject) => {


      hanspell.spellCheckByPNU(check2, 6000, (result) => {
        corrected.check2 = result
          .map((correction) => `${correction.token}: ${correction.suggestions.join(", ")}`)
          .join("\n");
        resolve();
      }, end, reject);

  });

  const check3Promise = new Promise((resolve, reject) => {


      hanspell.spellCheckByPNU(check3, 6000, (result) => {
        corrected.check3 = result
          .map((correction) => `${correction.token}: ${correction.suggestions.join(", ")}`)
          .join("\n");
        resolve();
      }, end, reject);
   
  });

  Promise.all([check1Promise, check2Promise, check3Promise]).then(() => {
    res.json(corrected);
  }).catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
  // hanspell.spellCheckByPNU(
  //   check1,
  //   6000,
  //   (result) => {
  //     const corrected = result
  //       .map(
  //         (correction) =>
  //           `${correction.token}: ${correction.suggestions.join(", ")}`
  //       )
  //       .join("\n");
  //     res.send(corrected);
  //   },
  //   end,
  //   error
  // );
});
// 서버 실행 및 종료 시 데이터베이스 연결 종료
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
process.on("exit", function () {
  connection.end();
}); // 프로세스 종료 시 데이터베이스 연결 종료
