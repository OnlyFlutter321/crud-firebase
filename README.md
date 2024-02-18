This is not crud firebase project basic of angular

Ng if=Show Image when click or toggle

Ng for == make one data.json file where you have json data you have to use this data and show
That data suppose {{product.name}} (in extra you can show in table )
===   What is different in this both img src?
 <img [src] = ‘product.imageUrl>
<img src = {{product.imageUrl}}

Many people prefer property binding over interpretation

Propertly binding allow other than string like input type= but in interpolation not possible
And such as boolean to false value

Interpolation always assign string

Then you have to use pipes for this use $sign to add price you can use | for lower case and other purpose   DATA BINDING TYPES  interpolation: {{pageTitle}}

Property Binding: <img [src] = ‘product.imageUrl’>

Event Binding : <button (click) = ‘toggleImage()’>

Two way Binding: <input [(ngModel) = ‘listFilter’/>

Pipe character |

Example
{{prodcut.price | currency:’USD’ : ‘symbol’:’1.2-2’}}

2 ways to Use Interface

1 = > Identifying the Property

export interface IProducut{
productId: number;
productName: string;
productCode: string;
releaseDate: string;
price: number;
description: string;
starRating: number;
imageUrl: string;
}

As a type

products: IProduct[] = [];

2 = > Identifying the Feature Set

export interface DoTiming{
count: number;
start(index: number): void;
stop(): void;
}

export class myComponent implements DoTiming{

    count: number = 0;
    start(index: number) : void {

    }
    stop() : void {

    }

}

Component Life Cycle

- [Create] => [Render] => [Create and Render Children] => <= [Process Changes] => [Destroy]

Life cycle Hook is an Interface. => implement to write code => when component lifecycle occur

3 Most Commonly Use Life Cycle

    OnInit: Perform component initialisation , retrive Data.

    OnChanges: Perform action after change to input properties.

    OnDestroy: Perform cleanup

Perform Lifecycle Hook

export class ProductListComponent implements OnInit{

    pageTitle: string = 'product List';

    showImage: boolean = false;

    listFilter: string = 'cart';

    products: IProduct[] = [];


    ngOnInit(): void {
         console.log('In OnInit');
    }

}

More Generalize Custom Pipes way

ng g pipe shared/convert-to-space

transform(value: string, character: string): string {
return value.replace(character, ' ');
}

value: string
character: string

return value.replace(character, ' ');

Getters and Settters

amount: number = 0; =>
suppose this is piggy bank we can put directly money in piggi bank
or take money from piggy bank

private \_amount: number = 0;
get amount() : number {

    return this._amount;

}

set amount(value: number) {

    return this._amount = value;

}

suppose you have locker so that need to be private and we can use that bank to take money or add monney

Filtering a List

PerformFilter(): IProduct[] {

    return this.products.filter((product: IProduct)=> product.productName.includes(this.listFilter))

}

performFilter(filterBy: string): IProduct[] {
filterBy = filterBy.toLocaleLowerCase();
return this.products.filter((product: IProduct) =>
product.productName.toLowerCase().includes(filterBy)
);
}

 <table>
        <tbody>
          <tr *ngFor="let product of products1">
            <td>{{ product.name }}</td>
            <td>{{ product.surname }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>{{ pageTitle }}</h2>

    <table>
      <thead>
        <th>
          <button class="btn btn-primary" (click)="toggleImage()">
            {{ showImage ? "Hide" : "Show" }} Image
          </button>
        </th>
        <tr>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Product Code</th>
          <th>Release Date</th>
          <th>Price</th>
          <th>Star Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of filteredProducts">
          <td>
            <img
              *ngIf="showImage"
              [src]="product.imageUrl"
              height="50px"
              [alt]="product.productName"
            />
          </td>
          <td>{{ product.productName }}</td>
          <td>{{ product.productCode | lowercase | convertToSpaces : "-" }}</td>
          <td>{{ product.releaseDate }}</td>
          <td>{{ product.price | currency : "USD" : "symbol" : "1.2-2" }}</td>
          <td>{{ product.starRating }}</td>
        </tr>
      </tbody>
    </table>

Using a componet 2 Ways

    directive -> custom HTML Syntax

   <body>
    
    <pm-root></pm-root>

    </body>


    Full Page Style View

Nested Component

    it’s template manages a fragment of a larger view

    it has a selector

    it optionally communicates with its container

Root Injector

Service is available throughout the application

Recommended for most scenarios

Component Injector

service is available only to that component and its child(nested) components

isolates a service used by only one component

provides multiple instance of the service

Observables and Reactive Extensions

Reactive Extensions(RxJS)

A library for composing data using observable sequences  and transforming that data using operators

angular using reactive extensions for working with data   - espicially asynchronous data

Synchronous : real time(phone call)

Asynchronous : No immediate response(Mail)

HTTP requests are Asynchronous : request and response   APPLICATION ->(get Me Products) [webserver]

- get a list of products
- Notify me when the response arrives
- I will continue along

APPLICATION <- (here are the products) [webserver]

- “Hey”,your data arrived”
- Ok,I”LL process it.Thanks!.

We do Get request with HTTP

But what do we use for Notification?
we use to setup notification with rxjs Observation sequennces coming

Observable sequence ,Observable stream

Observable

    A collection of items over time

- [ ]     Unlike an array, it doesn’t retains items
- [ ]     Emitted items can be observed over time

Array: [A,P,P,L,E]

Letter arraving over time => e.g A =>B=>C

What does an Observable do?

- [ ] Nothing until we subscribe

When we subscribe then we get notifications

There are three types of notifications

- [ ] Next: Next item is emitted
- [ ] Error: An error occurred and no more items are emitted
- [ ] Complete: No more items are emitted

(GET)
 APPLICATION -> (get Me Product) [webserver]

- Call http get
- http get returns an Observable,
- which will emit notifications

- subscribe to start the Observable and
  the get request is sent.

- code continues along.

(Response)

APPLICATION <- (here are the products) [webserver]

- The response is returned [{cart},{hammer},{saw}]
- The Observable emits a next
- notifications
- We process the emitted response

Observable Pipe (more than 100 operators )

A (Pipe(lowercase operator)) a (Pipe(enlarge operator)) a(increase size)

Common Obesevable Using

> . Start the Observable(subscribe)

> . Pipe emitted items through a set of operators

> . Process notifications : next, err, complete

> . Stop the Observable (unsubscribe)

mostly use rxjs = rxjs and rxjs/operators

[Product Data Service] (Get) => [Http Client Service]. (Get) => [Web Server]

[Product Data Service] (Response) <= [Http Client Service]. (Response) <= [Web Server]

We need to add HttpClientModule(in appmodule [imports])

export class ProductService{

    private productUrl = "url/api/products";


    constructor(private http: HttpClient){}

in thiss array its not returning array of product but

    its Observable so its not giving any response untill

we subscribe

    getProducts() : Observable<IProduct[]> {

        return this.http.get<IProduct[]>(this.productUrl);
    }

}

Subscribing to an observable are like newspaper(obsservable are lazy)

x.subscirbe()

x.subscirbe(observer)

x.subscirbe({
nextFn,
errorFn,
completeFn,
})

const sub = x.subscirbe({
nextFn,
errorFn,
completeFn,
})
