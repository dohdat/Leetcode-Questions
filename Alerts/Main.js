function StockAlert() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Alert");
    var rangeData = sheet.getDataRange();
    var lastColumn = rangeData.getLastColumn();
    var lastRow = rangeData.getLastRow();
    var searchRange = sheet.getRange(2, 2, lastRow - 1, lastColumn - 1);
    var rangeValues = searchRange.getValues();
    var backgrounds = searchRange.getBackgrounds();
    var y = MailApp.getRemainingDailyQuota();
    var currentDate = new Date().toLocaleDateString();
    var currentTime = new Date().toLocaleTimeString();
    var tickerColumn = getByName(sheet, "TICKER", 1);
    var expDateColumn = getByName(sheet, "EXP DATE", 1);
    const emails = ["dohdat@gmail.com", "4083983276@txt.att.net", "wtijzrc3ao52rooimywi8xnt0wnwdbjjsp3@in2.skedpal.com"];
    Logger.log("Daily remaining quota: " + y);
    sheet.getRange("O1").setValue("Last updated: " + currentTime); //Set current time
    sheet.getRange("U1").setValue(getLastRowMyAccount());
    if (sheet.getRange("L1").getValue() == false) {
        for (j = 0; j < lastRow - 1; j++) {
            limitSellCol = rangeValues[j][11];
            yesColumn = rangeValues[j][10];
            currentPosColumn = rangeValues[j][5];
            valColumn = rangeValues[j][14]; //true or false column
            expDateColumnBackground = backgrounds[j][4];

            //delete expiration date if in the money
            if (expDateColumnBackground == "#a61c00" && valColumn == false) {
                var date = [];
                date.push(j);
                var expRow = Number(date) + Number(searchRange.getRow());
                sheet.getRange(expRow, 6).setValue("");
                Logger.log("Expiration date row to erased: " + expRow);
            }

            if (currentPosColumn === "IN POSITION" && yesColumn == "YES") {
                var yes_col = [];
                yes_col.push(j);
                var yesRow = Number(yes_col) + Number(searchRange.getRow());
                sheet.getRange(yesRow, 12).setValue("");
                Logger.log("Yes Row erased: " + yesRow);
            }

            if (currentPosColumn === "IN POSITION" && limitSellCol === true) {
                var limitSellCol = [];
                limitSellCol.push(j);
                var limitSellRow = Number(limitSellCol) + Number(searchRange.getRow());
                sheet.getRange(limitSellRow, 13).setValue(false);
                Logger.log("Limit sell col changed to false: " + limitSellRow);
            }

            if (currentPosColumn == "OPEN NEW POSITION" && yesColumn == "") {
                {
                    var n = [];
                    n.push(j);
                    var rowToSetValue = Number(n) + Number(searchRange.getRow());
                    sheet.getRange(rowToSetValue, 12).setValue("YES");
                    var tickerVal = sheet.getRange(rowToSetValue, tickerColumn).getValue();
                    var expDateVal = sheet.getRange(rowToSetValue, expDateColumn).getValue();
                    emails.map((e) => {
                        sendEmail(e, tickerVal, "over");
                    });
                    if (expDateVal) {
                        sheet.getRange(rowToSetValue, 16).setValue(true);
                        Logger.log("Set row to hidden: " + rowToSetValue);
                    }
                    Logger.log("Alert found, email sent! Row to set value: " + rowToSetValue);
                }
            }
            if (currentPosColumn == "LIMIT SELL" && yesColumn == "") {
                {
                    var n = [];
                    n.push(j);
                    var rowToSetValue = Number(n) + Number(searchRange.getRow());
                    var tickerVal = sheet.getRange(rowToSetValue, tickerColumn).getValue();
                    sheet.getRange(rowToSetValue, 12).setValue("YES");
                    emails.map((e) => {
                        sendEmail(e, tickerVal, "limit");
                    });

                    Logger.log("Alert found, set limit sell! Row to set value: " + rowToSetValue);
                }
            }

            if (expDateColumnBackground == "#dd7e6b" && valColumn == true) {
                {
                    emails.map((e) => {
                        sendEmail(e, tickerVal, "restore");
                    });
                    var m = [];
                    m.push(j);
                    var rowToUncheck = Number(m) + Number(searchRange.getRow());
                    sheet.getRange(rowToUncheck, 16).setValue(false);
                    Logger.log("Options became in the money, unchecked box! Row unchecked: " + rowToUncheck);
                }
            }
        }
        //
        //delete row if expired out of the money
        for (row = lastRow - 2; row >= 0; row--) {
            dateColumnBackground = backgrounds[row][4];
            valueColumn = rangeValues[row][14];
            //delete row if expired out of the money
            if (dateColumnBackground == "#a61c00" && valueColumn == true) {
                var date2 = [];
                date2.push(row);
                var rowToDelete = Number(date2) + Number(searchRange.getRow());
                sheet.deleteRow(rowToDelete);
                Logger.log("Row to be deleted: " + rowToDelete);
            }
        }
    }
    sortAlert();
    //function to find extra cash in Accounts, and alert
    findExtraCash(sheet, emails);
}

const findExtraCash = (alertSheet, emails) => {
    var extraCash8034 = Math.round(alertSheet.getRange("S1").getValue());
    var extraCash6001 = Math.round(alertSheet.getRange("Y1").getValue());
    var maxValue8034 = alertSheet.getRange("W1").getValue();
    var maxValue6001 = alertSheet.getRange("X1").getValue();
    var alertFlag = alertSheet.getRange("S2");
    var percentToOpenNewPos = 0.05;
    if (extraCash8034 > maxValue8034 * percentToOpenNewPos && alertFlag.getValue() === "") {
        emails.map((e) => {
            sendEmail(e, null, "extra", extraCash8034, "8034");
        });
        Logger.log(`Extra cash ${extraCash8034} found in 8034 Account!`);
        alertFlag.setValue("YES");
    }
    if (extraCash6001 > maxValue6001 * percentToOpenNewPos && alertFlag.getValue() === "") {
        emails.map((e) => {
            sendEmail(e, null, "extra", extraCash6001, "6001");
        });
        Logger.log(`Extra cash ${extraCash8034} found in 6001 Account!`);
        alertFlag.setValue("YES");
    }
};

const sendEmail = (email, ticker, type, cashVal, account) => {
    const v = "10m from today [@MarketHours]";
    if (type === "over") {
        MailApp.sendEmail(email, `🎉 STOCK PRICE ALERT for ${ticker}! Check Alert Sheet! 🎉`, `🤑 Over Alert Price for ${ticker} !🤑 🎉 ${v}`);
    } else if (type === "limit") {
        MailApp.sendEmail(email, `🔥 😍 SET LIMIT SELL for ${ticker}! Check Alert Sheet! 🔥`, `😍 Set Limit Sell for ${ticker}! ${v}`);
    } else if (type === "restore") {
        MailApp.sendEmail(email, "STOCK PRICE ALERT! RESTORE POSITION! Check Alert Sheet!", `Under Alert Price ${v}`);
    } else if (type === "extra") {
        MailApp.sendEmail(email, `🤑 🎉 Extra capital $${cashVal} found in ${account} Account! 🤑 🎉`, `Extra capital in ${account} Account! ${v}`);
    }
};
