import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-coloradoriver',
  templateUrl: './coloradoriver.component.html',
  styleUrls: ['./coloradoriver.component.css']
})
export class ColoradoRiverComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getFlows1();
    this.getFlows2();
  }
  
  public flows1;
  public flows2;
  private url1 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09058000&parameterCd=00060'
  private url2 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09085100&parameterCd=00060'

  public getFlows1() {
    this.http.get(this.url1).subscribe(response =>{
      this.flows1 = response["value"].timeSeries[0].values[0].value[0].value;
    })
  }

  public getFlows2() {
    this.http.get(this.url2).subscribe(response =>{
      this.flows2 = response["value"].timeSeries[0].values[0].value[0].value;
    })
  }

}

