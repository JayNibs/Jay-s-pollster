// Google Apps Script: deploy as Web App (Execute as: Me, Access: Anyone). Paste the web app URL into SUBMIT_URL in index.html.
// Scores land in the active spreadsheet, one row per respondent.
function doPost(e){
  var d = JSON.parse(e.postData.contents);
  var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if(sh.getLastRow()===0) sh.appendRow(["submitted_at","respondent_id","position","overall","spread_sd","answered","domains_json"]);
  sh.appendRow([d.submitted_at,d.respondent_id,d.position,d.overall,d.spread_sd,d.answered,JSON.stringify(d.domains)]);
  return ContentService.createTextOutput("ok");
}
