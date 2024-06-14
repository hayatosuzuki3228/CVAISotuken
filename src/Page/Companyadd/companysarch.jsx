import React from "react";
import companies from "../Matching/matchtable";

const CompanyDetails = ({ id }) => {
  const company = companies.find((company) => company.id === id);

  if (!company) {
    return <div>会社が見つかりませんでした。</div>;
  }

  return (
    <div>
      <h2>会社の基本情報</h2>
      <ul>
        <li>
          <strong>会社名:</strong> {company.name}
        </li>
        <li>
          <strong>会社名（フリガナ）:</strong> {company.furigana}
        </li>
        <li>
          <strong>代表者:</strong> {company.representative}
        </li>
        <li>
          <strong>設立日:</strong> {company.foundation_date}
        </li>
        <li>
          <strong>電話番号:</strong> {company.phone_number}
        </li>
        <li>
          <strong>メールアドレス:</strong> {company.email}
        </li>
      </ul>
    </div>
  );
};

export default CompanyDetails;
