import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/public/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'home-customer',
    loadChildren: () => import('./pages/customer/home-customer/home-customer.module').then( m => m.HomeCustomerPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/public/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'change-profile',
    loadChildren: () => import('./pages/customer/change-profile/change-profile.module').then( m => m.ChangeProfilePageModule)
  },
  {
    path: 'charge',
    loadChildren: () => import('./pages/public/charge/charge.module').then( m => m.ChargePageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/public/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/public/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'notification-one',
    loadChildren: () => import('./pages/public/notification-one/notification-one.module').then( m => m.NotificationOnePageModule)
  },
  {
    path: 'notification-two',
    loadChildren: () => import('./pages/public/notification-two/notification-two.module').then( m => m.NotificationTwoPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/public/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./pages/public/qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/public/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'signature',
    loadChildren: () => import('./pages/public/signature/signature.module').then( m => m.SignaturePageModule)
  },
  {
    path: 'signature-image',
    loadChildren: () => import('./pages/public/signature-image/signature-image.module').then( m => m.SignatureImagePageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./pages/public/thank-you/thank-you.module').then( m => m.ThankYouPageModule)
  },
  {
    path: 'delivery-boy-list',
    loadChildren: () => import('./pages/deliveryboy/delivery-boy-list/delivery-boy-list.module').then( m => m.DeliveryBoyListPageModule)
  },
  {
    path: 'change-status-db',
    loadChildren: () => import('./pages/deliveryboy/change-status-db/change-status-db.module').then( m => m.ChangeStatusDbPageModule)
  },
  {
    path: 'home-delivery',
    loadChildren: () => import('./pages/deliveryboy/home-delivery/home-delivery.module').then( m => m.HomeDeliveryPageModule)
  },
  {
    path: 'order-details-delivery',
    loadChildren: () => import('./pages/deliveryboy/order-details-delivery/order-details-delivery.module').then( m => m.OrderDetailsDeliveryPageModule)
  },
  {
    path: 'order-details-customer',
    loadChildren: () => import('./pages/customer/order-details-customer/order-details-customer.module').then( m => m.OrderDetailsCustomerPageModule)
  },
  {
    path: 'order-completed',
    loadChildren: () => import('./pages/deliveryboy/order-completed/order-completed.module').then( m => m.OrderCompletedPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/customer/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/customer/payment/payment.module').then( m => m.PaymentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
