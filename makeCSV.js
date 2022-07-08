//다운로드 버튼 클릭 이벤트
$("#excelDownload").click(function () {
    let filename = "testFile.csv";
    getCSV(filename);
});

//csv 생성함수
function getCSV(filename) {
    var csv = [];
    var row = [];

    //1열에는 컬럼명
    row.push(
        "열 제목1",
        "열 제목2",
        "열 제목3",
    );

    csv.push(row.join(","));

    //chartDataList는 데이터 배열
    $.each(chartDataList, function (index, data) {
        row = [];
        row.push(
            data.d1,
            data.d2,
            data.d3
        );
        csv.push(row.join(","));
    });

    downloadCSV(csv.join("\n"), filename);

}

//csv 다운로드 함수
function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    //한글 처리를 해주기 위해 BOM 추가하기
    const BOM = "\uFEFF";
    csv = BOM + csv;

    csvFile = new Blob([csv], { type: "text/csv" });
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}