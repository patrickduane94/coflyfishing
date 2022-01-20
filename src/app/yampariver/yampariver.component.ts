import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-yampariver',
  templateUrl: './yampariver.component.html',
  styleUrls: ['./yampariver.component.css']
})
export class YampaRiverComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getFlows();
  }
  
  public flows;
  private url = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09237500&parameterCd=00060';

  public getFlows() {
    this.http.get(this.url).subscribe(response =>{
      this.flows = response["value"].timeSeries[0].values[0].value[0].value;
    })
  }

}
