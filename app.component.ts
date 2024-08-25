import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})


export class AppComponent {
  title = 'export-table-data-to-pdf-using-jspdf-example';

    async generatePDF() {
    // Fetch data from JSONPlaceholder API
    const apiURL = 'https://jsonplaceholder.typicode.com/users';
    const response =  await fetch(apiURL);
    const users = await response.json();

    // Create a new PDF document
    const doc = new jsPDF();

    // Prepare table columns and data
    const columns = ['ID', 'Name', 'Username', 'Email'];
    const data = users.map((user: { id: any; name: any; username: any; email: any; }) => [user.id, user.name, user.username, user.email]);

    // Add a table to the document using AutoTable
    (doc as any).autoTable({
        head: [columns],
        body: data,
        theme: 'striped', // Optional styling
    });


    doc.output('dataurlnewwindow');
    // Save the PDF
    // doc.save('users.pdf');
}

}

//   today: number = Date.now();

//   head = [['ID', 'NAME', 'DESIGNATION', 'DEPARTMENT']]

//   data = [
//     [1, 'ROBERT', 'SOFTWARE DEVELOPER', 'ENGINEERING'],
//     [2, 'CRISTINAO','QA', 'TESTING'],
//     [3, 'KROOS','MANAGER', 'MANAGEMENT'],
//     [4, 'XYZ','DEVELOPER', 'DEVLOPEMENT'],
//     [5, 'ABC','CONSULTANT', 'HR'],
//     [73, 'QWE','VICE PRESIDENT', 'MANAGEMENT'],
//   ]

//   createPdf() {
//     var doc = new jsPDF();
//     var date = new Date();
//     var dateString= "Date:"+ date;

//     doc.setFontSize(18);
//     doc.text('My Team Detail', 11, 8);
//     doc.setFontSize(11);
//     doc.setTextColor(100);
//     doc.text(dateString, 20, 8);


//     (doc as any).autoTable({
//       head: this.head,
//       body: this.data,
//       theme: 'grid',
//       didDrawCell: (data: { column: { index: any; }; }) => {
//         console.log(data.column.index)
//       }
//     })

//     // below line for Open PDF document in new tab
//     doc.output('dataurlnewwindow')

//     // below line for Download PDF document  
//     // doc.save('myteamdetail.pdf');
//   }

// }