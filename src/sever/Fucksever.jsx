import { postData } from "./api";

export function Fuckserver() {
  const data = {
    email: "hello.gmail",
    password: "111aa",
  };
  const data2 = {
    email: "plaseadomin.admin",
    pass: "Fuck",
  };

  const birthdays = new Date("2004-09-10");
  const graduation_year = new Date("2025");

  const userdata = {
    name: "DEMO太郎", // 名前
    furigana: "デモタロウ", // ふりがな
    gender: 1, // 性別 0: 男性, 1: 女性, 9: その他
    birthday: birthdays, // 誕生日 format: yyyy-mm-dd or yyyy/mm/dd
    residence: "愛知県", // 居住地
    graduation_year: graduation_year, // 卒業年 format: yyyy
    qualification: null, // 資格
    work_location: "愛知県", // 希望勤務地
  };
  const handleFuckserver = (event) => {
    // postData("admin/student/deactivate", data);
    // postData("admin/student/activate", data);
    // postData("admin/company/deactivate", data);
    // postData("admin/company/activate", data);
    // postData("registration/admin", data);
    // postData("authentication/admin", data);
    // postData("admin/student/list", data);
    // postData("admin/company/list", data);
    // postData("registration/student/all", data);
    // postData("authentication/student", data);
    // postData("registration/student", data);
    // postData("registration/student", data);
    // postData("registration/student", data);
    // postData("registration/student", data);
    // postData("registration/student", data);
    postData("registration/student", data);
    postData("user/profile/set", userdata);

    //postData("registration/admin", data2);
  };
  return <button onClick={handleFuckserver} />;
}
