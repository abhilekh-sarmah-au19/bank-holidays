const endpoint = 'https://www.gov.uk/bank-holidays.json';
const ul = document.getElementById('holidays')

let bankHolidays;
let england;

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => handleDates(data));

  function handleDates(data) {
    bankHolidays = data;
    england = bankHolidays["england-and-wales"].events;
    var now = new Date(2017);
    var thisMonth = now.getUTCMonth() + 1; //months from 1-12
    var thisDay = now.getUTCDate();
    var thisYear = now.getUTCFullYear();
    var thisDate = thisDay + '-' +thisMonth + '-' +thisYear;
    const html = england.map((items)=>{
      const [year, month, date] = items.date.split("-");
      // console.log(thisDate, items.date);              
      if(Date.parse(thisDate) <= Date.parse(items.date)){
      return `  <tr></tr>
      <td class="col-2 text-light text-center">${items.title} <br> <br><span class="text-danger">(${date} / ${month} / ${year})</span>  </td>
      `;
      }
    
    }).join('');
  ul.innerHTML = html;
}
$(function() {

var start = moment().subtract(0, 'days');
var end = moment();

function cb(start, end) {
    $('#reportrange span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
}

$('#reportrange').daterangepicker({
    startDate: start,
    endDate: end,
    ranges: {
      //  'Today': [moment(), moment()],
       'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
       'Last week': [moment().subtract(6, 'days'), moment()],
       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
}, cb);

cb(start, end);


});
function filterData() {
  const dates2 = [...reportrange];
  console.log(dates2);
  const start = document.getElementById("reportrange");
  const end = document.getElementById("reportrange");
}

