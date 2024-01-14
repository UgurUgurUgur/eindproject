import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'your_backend_api_url'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  getLatestReleases(): Observable<Product[]> {
    // Implement logic to fetch latest releases from the backend
    return this.http.get<Product[]>(`${this.apiUrl}/latest-releases`);
  }

  getPopularProducts(): Observable<Product[]> {
    // Implement logic to fetch popular products from the backend
    return this.http.get<Product[]>(`${this.apiUrl}/popular-products`);
  }

  getOurStories(): Observable<Product[]> {
    // Implement logic to fetch our stories from the backend
    return this.http.get<Product[]>(`${this.apiUrl}/our-stories`);
  }
}
