const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

function CalculateReadableDateFromUnix()
{
    let unix_timestamp = document.getElementById("inputUnixText").value;
    let output = document.getElementById("output")
    //create new JS date object based on unix timestamp (x1000 to convert to millisec)
    let date = new Date(unix_timestamp * 1000);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based (January is 0, this allows us to use an array to convert the number to the name)
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes(); 
    const seconds = date.getSeconds(); 

    let formattedTime = `${day}/${monthNames[month]}/${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    output.innerText = formattedTime;
}