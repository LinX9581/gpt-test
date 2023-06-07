let pickerYesterday = moment(new Date()).add(-1, 'days').format('MM-DD-YYYY');
async function dateRangePicker() {
    await $('#datePicker').daterangepicker({
        "dateLimit": {
            "days": 32
        },
        "startDate": pickerYesterday,
        "endDate": pickerYesterday,
        "minDate": "01/01/2021",
        "maxDate": "12/31/2021"
    }, function (start, end, label) {
        $("#begin_date").html("<text>" + start.format('YYYY-MM-DD') + "</text>");
        $("#end_date").html("<text>" + end.format('YYYY-MM-DD') + "</text>");
    });
}
export default dateRangePicker()