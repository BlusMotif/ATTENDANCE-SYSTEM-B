// Student data mapping
const studentData = {
  "04/2022/1201D": "ESTHER OSIKO TEYE",
  "04/2022/1297D": "APEKU ABEL DOTSE",
  "04/2022/1279D": "SAMUEL SELORM GOKU",
  "04/2022/1281D": "ALBERT PADI LAWER",
  "04/2022/1193D": "EMMANUEL AKOTO JUNIOR",
  "04/2022/1282D": "JOSEPH APPIAH",
  "04/2022/1178D": "MICHAEL ASANTE DANKWAH",
  "04/2022/1280D": "JUANA NKRUMAH BEMBIL",
  "04/2022/1269D": "ZAAKYI YAKUBU",
  "04/2022/1213D": "RAFIA MAHAMUD",
  "04/2022/1174D": "SARAH ACQUAH",
  "04/2022/1179D": "COLLINS AMOAH SAKYI",
  "04/2022/1184D": "DANSO MAXWELL ASANTE",
  "04/2022/1263D": "HARRISON LARBI OKYERE",
  "04/2022/1186D": "EMMANUELLA AMETEPEY",
  "04/2022/1224D": "MARTHA EFFAH",
  "04/2022/1198D": "OSAE PAUL",
  "04/2022/1187D": "FREDERICK MARK ADDO",
  "04/2022/1218D": "AVEGE GODSON ELIKEM KWAKU",
  "04/2022/1461D": "SEGLAH PETER",
  "04/2022/1192D": "HAWA KWANDA",
  "04/2022/1180D": "JEFFREY OPPONG ASANTE",
  "04/2022/1161D": "MICHAEL DORDZAVU",
  "04/2022/1162D": "COMFORT DARKO",
  "04/2022/1267D": "CLETUS SAASOWULU BEWAALE",
  "04/2022/1441D": "EBENEZER OPPONG",
  "04/2022/1296D": "ADAMTEY THEOPHILUS",
  "04/2022/1157D": "IBRAHIM ABDUL MALIK",
  "04/2022/1181D": "OSEI WUSU MINA",
  "04/2022/1243D": "BAMA WISDOM SAMBE",
  "04/2022/1240D": "SANDRA MENSON",
  "04/2022/1245D": "AIDOO SAMUEL NYARKO",
  "04/2022/1253D": "EVANS TEYE",
  "04/2022/1259D": "FREMPONG MEDRACK",
  "04/2022/1272D": "BLESS AMA ASAMOAH",
  "04/2022/1160D": "CHARLES TAKYI",
  "04/2022/1173D": "DAWUD SALIFU",
  "04/2022/1261D": "SUNU GERALD",
  "04/2022/1228D": "AFETI ISAAC",
  "04/2022/1248D": "SAFRO JONES",
  "04/2022/1226D": "CLEMENT TETTEH OSAE",
  "04/2022/1292D": "AGYEI PRINCE",
  "04/2022/1176D": "LARTEY YAW RAPHAEL",
  "04/2022/1158D": "RAZAK HALIMATU SADIA",
  "04/2022/1175D": "LOUIS ASAMOAH",
  "04/2022/1260D": "NADUTEY IMMANUEL JUNIOR",
  "04/2022/1255D": "OPARE AFARI SYLVERSTINA",
  "04/2022/1222D": "SARPONG KWASI BISMARK",
  "04/2022/1243D": "WISDOM BAMA",
  "04/2022/1370D": "PRINCE BAIDOO",
  "04/2022/1288D": "MOHAMMED AWAL INUSAH",
  "04/2022/1244D": "WILSON KWAKU EUGENE",
  "04/2022/1153D": "SAFO NANA YAW",
  "04/2022/1262D": "REUBEN AWUKU",
  "04/2022/1285D": "EKPE EMMANUEL",
  "04/2022/1236D": "TACKIE ISAAC NII QUAYE",
  "04/2022/1189D": "FRANKLIN ABEDNEGO LARTEY",
  "04/2022/2184D": "ERNEST KWABENA OFOSU",
  "04/2022/1163D": "CHRISTOPHER ISAAC ASANTE",
  "04/2022/1206D": "AKROFI KELVIN NUMORTEYE",
  "04/2022/1230D": "DAVID KWABENA APPIAH",
  "04/2022/1204D": "REUBEN ADDO",
  "04/2022/1250D": "BERNARD ADZINYO",
  "04/2022/1264D": "STEPHEN OFORI FRIMPONG",
  "04/2022/1199D": "ENOCK ACHEAMPONG",
  "04/2022/1207D": "EDZILAWO KWADZO HERBERT",
  "04/2022/1316D": "ANIM MICHAEL",
  "04/2022/1274D": "ENOCK AMARTEY",
  "04/2022/1215D": "TERKPETEY MARTIN KWABENA",
  "04/2022/1177D": "NANA OFORI TAKYI",
  "04/2022/1168D": "OSEI BENJAMIN ASANTE",
  "04/2022/1205D": "EUNICE ABENA BENTUM OWUSU",
  "04/2022/1239D": "JESSE OBENG ANKRAH",
  "04/2022/1275D": "TETTEH ORTIS",
  "04/2022/1195D": "MOHAMMED MASUDU",
  "04/2022/1265D": "AMOAH SAMUEL DJAN",
  "04/2022/1284D": "LESLIE OKINE",
  "04/2022/1238D": "BRIDGET SERWAA OWUSU-BOAKYE",
  "04/2022/1211D": "TOGBUIGAH GABRIEL JUNIOR",
  "04/2022/1249D": "BENJAMIN ABAKAH KOW",
  "04/2022/1258D": "RANDY AHIAKWA ODEI",
  "04/2022/1171D": "ABRAHAM QUAYNOTEY QUAYE",
  "04/2022/1294D": "SAEED ABDUL MUHSIN",
  "04/2022/1266D": "ISAAC ADU-YEBOAH",
  "04/2022/1200D": "SAMUEL BOATENG",
  "04/2022/1270D": "ALIDU SALIM ABDUL",
  "04/2022/1242D": "OFORI KELVIN",
  "04/2022/1252D": "JOSHUA ELIKEM KOJO AMEYIBOR",
  "04/2022/1188D": "RICHARD ADU APOMAH",
  "04/2022/1257D": "MAXIMILIAAN JOEL SEWORNU",
  "04/2022/1170D": "ADDY NEHEMIAH NARTEY",
  "04/2022/1190D": "KAMBA NSANDOLAR WISDOM",
  "04/2022/1212D": "LARTEY RICHMOND KWADWO",
  "04/2022/1225D": "ABAN EUGENE TETTEY",
  "04/2022/1232D": "OHENE DOUGLAS",
  "04/2022/1286D": "OWUSU FRIMPONG DANIEL JUNIOR",
  "04/2022/1276D": "ADJEI JOSHUA ADJETEY",
  "04/2022/1223D": "YEVU-SIAME PHILIP",
  "04/2022/1216D": "TSOGBE BLESS",
  "04/2022/1231D": "MARTIN APPIAH DWOMMOH",
  "04/2022/1237D": "ALEX ASARE SAKYIAMAH",
  "04/2022/1273D": "ARMSTRONG OBODAI",
  "04/2022/1152D": "PAA KWESI GYAN",
  "04/2022/1202D": "KEMEH JAMES",
  "04/2022/1172D": "BRIGHT TETTEGAH",
  "04/2022/1268D": "ANGELO NANA KROBO-EDUSEI",
  "04/2022/1234D": "ADZAKPA LEAH AMI",
  "04/2022/1155D": "ANANI COURAGE",
  "04/2022/1203D": "AKOLGO FREDERICK NYAABA",
  "04/2022/1217D": "KORANTENG ISAAC",
  "04/2022/1256D": "SAMUEL AGBEKO RIBI",
  "04/2022/1183D": "CALVIN KABUTEY OCANSEY",
  "04/2022/1221D": "AGABUS DUGBATEY",
  "04/2022/1167D": "ACHEAMPONG SAMUEL OBESE",
  "04/2020/1383": "DESMOND KWESI OFOEDA",
  "04/2022/1432D": "FARHAN GHANDHI ADAMS",
  "04/2022/1303D": "RANSFORD KOFI TWENEBOA",
  "04/2022/1191D": "ANNAN EZEKIEL KWABENA OWUSU",
  "04/2022/1246D": "AMOH AGYEKUM",
  "04/2022/1197D": "KAMIL ABDUL BASIT",
  "04/2022/1289D": "JAMES KUMI AWUAH",
  "04/2022/1166D": "ADU-ASAMOAH PAA OFORI",
  "04/2022/1295D": "ASARE GYIMAH ERIC",
  "04/2022/1214D": "LEMAWU GABRIEL BOETEY",
  "04/2022/1165D": "STEPHEN LARYEA",
  "04/2022/1156D": "ERNEST OFOSU-DEDE",
  "04/2022/1278D": "GABRIEL MAWULI",
  "04/2022/1182D": "JEREMIAH NII ADDY ADDY",
  "04/2022/1283D": "ADDO JONATHAN AGYEI",
  "04/2022/1235D": "JUDE ASABREH",
  "04/2022/1277D": "AKUFFO OBENG EMMANUEL",
  "04/2022/1185D": "NORTEY PRINCE NUERTEY",
  "04/2022/1233D": "ANDY OBENG BOATENG",
  "04/2022/1194D": "ANYAN GIDEON",
  "04/2022/1169D": "OWOO GREGORY NII KWATEI",
  "04/2022/1229D": "ABDUL HAMID",
  "02/2022/1471D": "EBENEZER DWUMOH ACHEAMPONG",
  "02/2022/1159D": "SALLAH FAMOUS"
};

// Initialize attendance records and course title from localStorage
let attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
let currentCourseTitle = localStorage.getItem('currentCourseTitle') || '';
let currentWeek = localStorage.getItem('currentWeek') || '';
const attendanceForm = document.getElementById('attendance-form');

// Add event listener for index number input
document.getElementById('index-number').addEventListener('input', function(e) {
    e.target.value = e.target.value.toUpperCase();
    const indexNumber = e.target.value.trim();
    const studentNameInput = document.getElementById('student-name');

    if (studentData[indexNumber]) {
        studentNameInput.value = studentData[indexNumber];
    } else {
        studentNameInput.value = '';
    }
});

// Set course title and week if they exist and lock them
if (currentCourseTitle) {
    document.getElementById('course-title').value = currentCourseTitle;
    document.getElementById('course-title').disabled = true;
    document.getElementById('week-number').value = currentWeek;
    document.getElementById('week-number').disabled = true;
} else {
    document.getElementById('course-title').disabled = false;
    document.getElementById('week-number').disabled = false;
}
const recordsList = document.getElementById('records');
const exportBtn = document.getElementById('export-btn');
const clearBtn = document.getElementById('clear-btn');
const saveBtn = document.getElementById('save-btn');
const searchInput = document.getElementById('search-input');

// Set default date to today
document.getElementById('attendance-date').valueAsDate = new Date();

// Show notification
function showToast(message, type = 'success') {
    swal({
        title: type === 'success' ? "Success!" : "Error!",
        text: message,
        icon: type,
        buttons: false,
        timer: 2500,
        className: "sweet-alert-custom",
        closeOnClickOutside: true
    });
}

// Update table with records
function updateTable(records = attendanceRecords) {
    recordsList.innerHTML = '';
    records.forEach((record, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <div style="font-weight: bold">${record.indexNumber}</div>
                <div style="color: #666; font-size: 0.9em">${record.studentName}</div>
            </td>
            <td>${new Date(record.attendanceDate).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'})}</td>
            <td><span class="status-badge present">Present</span></td>
            <td>
                <button class="edit-btn" onclick="editRecord(${index})">✎</button>
                <button class="delete-btn" onclick="deleteRecord(${index})">×</button>
            </td>
        `;
        recordsList.appendChild(tr);
    });
}

// Handle form submission
attendanceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = document.getElementById('student-name').value.trim();
    const indexNumber = document.getElementById('index-number').value.trim();
    const attendanceDate = document.getElementById('attendance-date').value;
    const originalName = studentData[indexNumber];
    const isEdited = originalName && originalName !== studentName;

    // Check for duplicates
    const isDuplicate = attendanceRecords.some(record => 
        record.indexNumber === indexNumber && 
        record.attendanceDate === attendanceDate
    );

    if (isDuplicate) {
        showToast("This student has already marked attendance for this date.", "error");
        return;
    }

    // Add new record
    const courseTitle = document.getElementById('course-title').value.trim();
    const weekNumber = document.getElementById('week-number').value.trim();
    currentCourseTitle = courseTitle;
    currentWeek = weekNumber;
    localStorage.setItem('currentCourseTitle', courseTitle);
    localStorage.setItem('currentWeek', weekNumber);
    attendanceRecords.push({ 
        studentName, 
        indexNumber, 
        attendanceDate, 
        courseTitle, 
        weekNumber,
        isEdited,
        originalName: isEdited ? originalName : undefined
    });

    // Hide course title and week fields after first entry
    document.getElementById('course-title').parentElement.parentElement.style.display = 'none';

    updateTable();
    swal("Congrats!", "Attendance marked successfully!", "success");
    // Reset form but keep course title
    document.getElementById('student-name').value = '';
    document.getElementById('index-number').value = '04/2022/';
    document.getElementById('attendance-date').valueAsDate = new Date();
    saveToLocalStorage();
});

// Search functionality
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRecords = attendanceRecords.filter(record => 
        record.studentName.toLowerCase().includes(searchTerm) ||
        record.indexNumber.includes(searchTerm)
    );
    updateTable(filteredRecords);
});

// Delete record
function deleteRecord(index) {
    if (confirm('Are you sure you want to delete this record?')) {
        attendanceRecords.splice(index, 1);
        updateTable();
        saveToLocalStorage();
        showToast("Record deleted successfully!");
    }
}

// Edit record
function editRecord(index) {
    const record = attendanceRecords[index];
    document.getElementById('student-name').value = record.studentName;
    document.getElementById('index-number').value = record.indexNumber;
    document.getElementById('attendance-date').value = record.attendanceDate;
    document.getElementById('course-title').value = record.courseTitle;

    attendanceRecords.splice(index, 1);
    updateTable();
    saveToLocalStorage();
    showToast("Edit the record and submit to update");
}

// Clear all records
clearBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to clear all records?')) {
        attendanceRecords = [];
        currentCourseTitle = '';
        currentWeek = '';
        localStorage.removeItem('currentCourseTitle');
        localStorage.removeItem('currentWeek');
        document.getElementById('course-title').value = '';
        document.getElementById('week-number').value = '';
        document.getElementById('course-title').disabled = false;
        document.getElementById('week-number').disabled = false;
        document.getElementById('course-title').parentElement.parentElement.style.display = 'block';
        updateTable();
        saveToLocalStorage();
        showToast("All records cleared!");
    }
});

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));
}

saveBtn.addEventListener('click', function() {
    saveToLocalStorage();
    showToast("Data saved successfully!");
});

// Export functionality
exportBtn.addEventListener('click', function() {
    // Get all students from studentData
    const today = new Date().toISOString().split('T')[0];
    const allStudents = Object.entries(studentData).map(([indexNumber, name]) => ({
        indexNumber,
        studentName: name,
        status: 'Absent',
        attendanceDate: today
    }));

    // Mark present students and update their dates
    const presentStudents = new Set();
    attendanceRecords.forEach(record => {
        presentStudents.add(record.indexNumber);
        const student = allStudents.find(s => s.indexNumber === record.indexNumber);
        if (student) {
            student.status = 'Present';
            student.attendanceDate = record.attendanceDate;
        }
    });

    // Sort students (Present first, then Absent)
    allStudents.sort((a, b) => {
        if (a.status === b.status) return 0;
        return a.status === 'Present' ? -1 : 1;
    });

    // Calculate totals
    const totalPresent = allStudents.filter(s => s.status === 'Present').length;
    const totalAbsent = allStudents.filter(s => s.status === 'Absent').length;

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
        <html>
            <head>
                <title>Attendance Records</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { 
                        border: 1px solid #ddd; 
                        padding: 8px; 
                        text-align: left;
                        font-size: 14px;
                        line-height: 1.4;
                    }
                    th { 
                        background-color: #f2f2f2;
                        font-weight: bold;
                    }
                    td { white-space: nowrap; }
                    .date-column { width: 120px; }
                    h1 { text-align: center; color: #007bff; }
                    .present, .absent { 
                        padding: 5px 10px;
                        border-radius: 15px;
                        color: white;
                        font-weight: 700;
                        display: inline-block;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .present { background-color: #28a745; }
                    .absent { background-color: #dc3545; }
                </style>
            </head>
            <body>
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="KTU LOGO.PNG" alt="School Logo" style="max-width: 150px;">
                    <h1 style="margin: 15px 0; font-size: 24px;">KOFORIDUA TECHNICAL UNIVERSITY</h1>
                    <h2 style="margin: 10px 0; font-size: 20px;">Faculty of Applied Science and Technology</h2>
                    <h3 style="margin: 10px 0; font-size: 18px;">Department of Computer Science</h3>
                    <h4 style="margin: 10px 0; font-size: 16px;">HND NETWORKING A (300)</h4>
                    <div style="margin: 20px 0; padding: 10px; border: 2px solid #333; display: inline-block;">
                        <h2 style="margin: 0;">ATTENDANCE SHEET</h2>
                    </div>
                </div>
                <div style="margin: 20px 0; font-size: 16px;">
                    <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; margin-bottom: 10px;">
                        <strong>Course Title:</strong>
                        <span>${attendanceRecords[0]?.courseTitle || 'N/A'}</span>
                        <strong>Week:</strong>
                        <span>${attendanceRecords[0]?.weekNumber || 'N/A'}</span>
                        <strong>Date:</strong>
                        <span>${new Date().toLocaleDateString('en-GB')}</span>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th style="font-size: 14px; font-weight: bold;">#</th>
                            <th style="font-size: 14px; font-weight: bold;">Full Name</th>
                            <th style="font-size: 14px; font-weight: bold;">Index Num</th>
                            <th style="font-size: 14px; font-weight: bold;">Date</th>
                            <th style="font-size: 14px; font-weight: bold;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${allStudents.map((student, index) => `
                            <tr>
                                <td style="font-size: 14px;">${index + 1}</td>
                                <td style="font-size: 14px;">${student.studentName}${student.isEdited ? 
                                    ` <span style="color: #dc3545;">(Edited from: ${student.originalName})</span>` 
                                    : ''}</td>
                                <td style="font-size: 14px;">${student.indexNumber}</td>
                                <td style="font-size: 14px;">${student.status === 'Present' ? 
                                    new Date(attendanceRecords.find(r => r.indexNumber === student.indexNumber)?.attendanceDate).toLocaleDateString('en-GB')
                                    : new Date().toLocaleDateString('en-GB')}</td>
                                <td><span class="${student.status.toLowerCase()}">${student.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <div style="margin-top: 30px; border-top: 1px solid #333; padding-top: 20px;">
                    <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: bold;">
                        <div>
                            <p>Total Students Present: ${totalPresent}</p>
                            <p>Total Students Absent: ${totalAbsent}</p>
                            <p>Total Class Size: ${totalPresent + totalAbsent}</p>
                        </div>
                        <div style="text-align: right;">
                            <p style="margin-bottom: 50px;">___________________</p>
                            <p>Course Lecturer's Signature</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
});

// Initial table update
updateTable();

// Prevent right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Prevent keyboard shortcuts and dev tools
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (

        e.keyCode === 73 || // I key
        e.keyCode === 74 || // J key
        e.keyCode === 75 || // K key
        e.keyCode === 83 || // S key
        e.keyCode === 85 || // U key
        e.keyCode === 86    // V key
    )) {
        e.preventDefault();
    }
    // Prevent F12
    if(e.keyCode === 123) {
        e.preventDefault();
    }
});

// Disable source viewing
document.addEventListener('keypress', function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
    }
});
