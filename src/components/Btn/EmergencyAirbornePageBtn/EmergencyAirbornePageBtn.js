import React, { useState } from "react";
import "./EmergencyAirbornePageBtn.css";

const EmergencyAirbornePageBtn = () => {
  // 긴급공수에서 사용하는 해당 컴포넌트의 이동하는 버튼

  const items = [
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" },
    { name: "Item 5" },
    { name: "Item 6" },
    { name: "Item 7" },
    { name: "Item 8" },
    { name: "Item 9" },
    { name: "Item 10" },
    { name: "Item 11" },
    { name: "Item 12" },
    { name: "Item 13" },
  ];
  // 더미 객체 데이터 items

  const itemsPerPage = 6;
  // 한페이지당 출력할 컴포넌트의 수

  const totalPages = Math.ceil(items.length / itemsPerPage);
  // 총페이지 수를 담는 변수, 객체배열의 전체 크기를 출력할 수만큼 나눈 값을 무조건 올림
  // 6의 배수가 아니더라도 남아있는것도 추가적인 페이지를 구성할 수 있게 설정한다.

  // 페이지 상태 관리에 사용되는 페이지 번호
  const [pageNum, setPageNum] = useState(1);

  // 현재 페이지에 해당하는 아이템들을 가져오기
  const getPageItems = () => {
    const startIndex = (pageNum - 1) * itemsPerPage;
    //각 페이지에 출력되는 목록의 시작인덱스를 구하는 식 첫페이지는 0을 곱해서 0부터
    const endIndex = startIndex + itemsPerPage;
    // 내시작점부터 필요한 인덱스 수만큼 출력하기 위해서.
    return items.slice(startIndex, endIndex);
    // endIndex를 포함하지 않는 시작점부터 endIndex-1까지를 반환하는거야.
  };

  // 페이지 증가 및 감소 함수
  const handlePrevPage = () => {
    setPageNum(pageNum === 1 ? totalPages : pageNum - 1);
    // 페이지 번호가 1일때는 뒤로 가면 전체 페이지 맨 마지막으로 가고 아닌 경우 1만큼 이동
  };

  const handleNextPage = () => {
    setPageNum(pageNum === totalPages ? 1 : pageNum + 1);
    // 마지막 번호인경우는 1로 돌아가고 아닌 경우는 1만큼 이동
  };

  const handlePageClick = (page) => {
    setPageNum(page);
    // 지정되는 페이지 번호로 이동한다.
  };

  return (
    <React.Fragment>
      <div className="items">
        {getPageItems().map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
        {/* 해당 메소드를 이용해 현재 페이지의 해당하는 객체들만? 가져와서 화면에 뿌린다. */}
      </div>

      <div className="pagination">
        <div onClick={handlePrevPage}>{"<"}</div>

        {[...Array(totalPages)].map((_, i) => (
          // 페이지 번호만큼 범위를 가진 비어있는 값들의 배열을 만들어낸후 인덱스만을 활용한다.
          // map의 첫번째값은 해당 배열의 내용인데 비어있으므로 사용하지않을 때 _, 두번째 값 인덱스를 i라 정의
          <div
            key={i}
            onClick={() => handlePageClick(i + 1)}
            className={`dot ${pageNum === i + 1 ? "active" : ""}`}
            // 페이지 넘버가 현재 페이지와 일치하면 'active' 클래스 추가
          >
            .
          </div>
        ))}

        <div onClick={handleNextPage}>{">"}</div>
      </div>
    </React.Fragment>
  );
};

export default EmergencyAirbornePageBtn;
