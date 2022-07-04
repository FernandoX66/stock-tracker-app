import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
})
export class StocksComponent implements OnInit {
  stockInput = new UntypedFormControl('', [Validators.pattern('^[A-Z]{1,5}$')]);
  stocks: string[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    if (this.localStorageService.getStocks()) {
      this.stocks = this.localStorageService.getStocks();
    }
  }

  trackStock(): void {
    if (this.stocks.indexOf(this.stockInput.value) === -1) {
      this.stocks.push(this.stockInput.value);
      this.localStorageService.setStocks(this.stocks);
    }
    this.stockInput.reset();
  }

  onDeleteStock(symbol: string): void {
    const index = this.stocks.indexOf(symbol);
    this.stocks.splice(index, 1);
    this.localStorageService.setStocks(this.stocks);
  }
}
