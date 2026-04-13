// =====================================================
// River Cleanup Logger – Google Apps Script Web App
// Deploy this as a Web App (Execute as: Me, Access: Anyone)
// =====================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Cleanups");

    // Create the sheet and header row on first run
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Cleanups");
      sheet.appendRow([
        "Timestamp",
        "Date of Cleanup",
        "River Name",
        "What3Words",
        "Organiser Name",
        "Email",
        "Volunteers",
        "Waste Collected (kg)",
        "Details"
      ]);
      // Basic formatting for headers
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#1a6b5a").setFontColor("#ffffff");
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),                        // Timestamp (auto)
      data.date        || "",
      data.river       || "",
      data.w3w         || "",
      data.name        || "",
      data.email       || "",
      data.volunteers  || "",
      data.waste       || "",
      data.details     || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: GET handler to confirm the script is live
function doGet() {
  return ContentService
    .createTextOutput("River Cleanup Logger is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}
