import { Component, ViewChild,OnInit, ElementRef } from '@angular/core';
declare var require: any;
var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-makeprescription',
  templateUrl: './makeprescription.component.html',
  styleUrls: ['./makeprescription.component.css']
})
export class MakeprescriptionrComponent implements OnInit {

  constructor() { }

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();

  }

  ngOnInit(): void {
  }

}
