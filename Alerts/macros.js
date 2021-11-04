//Function to sort contribution date
//Runs once a day
function SortDate() {
    clearCandidateList();
    Logger.log("Candidate List cleared");
    clearFindNewList();
    Logger.log("FindNew List cleared");
    importCSVFromGmail(6001);
    importCSVFromGmail(8034);
    mySleep(2);
    calculateDailyNetworth();
    mySleep(2);
    setMinValueChart();
    hideSheets();
    removeYes();
}

//Function to clear the candidateList
function clearCandidateList() {
    var sss = SpreadsheetApp.getActiveSpreadsheet();
    var candidateSheet = sss.getSheetByName("Candidate List");
    var range = candidateSheet.getRange("F53:J");
    range.clear();
}

//Function to clear the FindNew sheet
function clearFindNewList() {
    var sss = SpreadsheetApp.getActiveSpreadsheet();
    var candidateSheet = sss.getSheetByName("FindNew");
    var range = candidateSheet.getRange("A2:P");
    range.clear();
}

//function to maintain min & max value of Networth Chart
function setMinValueChart() {
    var sss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = sss.getSheetByName("Networth Tracker");
    var minVal = Number(sheet.getRange(9, 18).getValue());
    var maxVal = Number(sheet.getRange(9, 19).getValue());
    var chart = sheet.getCharts()[0];
    chart = chart
        .modify()
        .setOption("vAxes.0.viewWindow.max", maxVal)
        .setOption("vAxes.0.viewWindow.min", minVal - minVal * 0.07)

        .build();
    sheet.updateChart(chart);
}
function hideSheets() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Alert");
    var candidateListSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Candidate List");
    var baDungMeTuSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Ba Dung & Me Tu");
    baDungMeTuSheet.hideSheet();
    candidateListSheet.hideSheet();
    sheet.hideSheet();
}

function removeYes() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Alert");
    var rangeData = sheet.getDataRange();
    var lastColumn = rangeData.getLastColumn();
    var lastRow = rangeData.getLastRow();
    var searchRange = sheet.getRange(1, 1, lastRow, lastColumn);
    var rangeValues = searchRange.getValues();
    for (let r = 0; r < lastRow; r++) {
        for (let c = 0; c < lastColumn; c++) {
            if (rangeValues[r][c] === "YES") {
                sheet.getRange(r + 1, c + 1).setValue("");
            }
        }
    }
}
