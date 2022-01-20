import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-blueriver',
  templateUrl: './blueriver.component.html',
  styleUrls: ['./blueriver.component.css']
})
export class BlueRiverComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getFlows1();
    this.getFlows2();
    this.getFlows3();
  }
  
  public flows1;
  public flows2;
  public flows3;
  private url1 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09046490&parameterCd=00060'
  private url2 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09050700&parameterCd=00060'
  private url3 = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09057500&parameterCd=00060'

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

  public getFlows3() {
    this.http.get(this.url3).subscribe(response =>{
      this.flows3 = response["value"].timeSeries[0].values[0].value[0].value;
    })
  }

}
