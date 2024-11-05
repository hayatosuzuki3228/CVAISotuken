import { postData } from "./api";

export function Fuckserver() {
  const data = {
    email: "コンチニハサーバーヲコワシニキマシタ",
    password: "11111aaa",
  };
  const handleFuckserver = (event) => {
    postData("admin/student/deactivate", data);
    postData("admin/student/activate", data);
    postData("admin/company/deactivate", data);
    postData("admin/company/activate", data);
    postData("registration/admin", data);
    postData("registration/student", data);
    postData("registration/student", data);
    postData("registration/student", data);
    postData("registration/student", data);
    postData("registration/student", data);
    postData("registration/student", data);
    postData("registration/student", data);
    postData("registration/student", data);
    postData("registration/student", data);
    postData("registration/student", data);
  };
  return <button onClick={handleFuckserver} />;
}
