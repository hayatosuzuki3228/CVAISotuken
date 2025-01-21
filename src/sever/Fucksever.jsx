import { postData } from "./api";

export function Fuckserver() {
  const data = {
    email: "hoge@hoge.hoge",
    password: "hoge0000",
  };
  const data2 = {
    email: "plaseadomin.admin",
    pass: "Fuck",
  };
  const handleFuckserver = (event) => {
    postData("admin/student/deactivate", data);
    postData("admin/student/activate", data);
    postData("admin/company/deactivate", data);
    postData("admin/company/activate", data);
    postData("registration/admin", data);
    postData("authentication/admin", data);
    postData("admin/student/list", data);
    postData("admin/company/list", data);
    postData("registration/student/all", data);
    postData("authentication/student", data);
    postData("admin/student/batch/deactivate", data);
    postData("admin/student/batch/activate", data);
    postData("registration/student", data);
    postData("registration/student", data);
    postData("registration/student", data);

    //postData("registration/admin", data2);
  };
  return <button onClick={handleFuckserver} />;
}
