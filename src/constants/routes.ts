export const AppRoute = Object.freeze({
  Auth: '/signin',
  Customers: '/customers',
  CustomerDetails: (account_uuid: string) => `/customers/${account_uuid}`,
  CustomerRefundDetails: (refund_uuid: string) =>
    `/customers/refunds/${refund_uuid}`,
  Merchants: '/merchants',
  MerchantDetails: (account_uuid: string) => `/merchants/${account_uuid}`,
  MerchantRefundDetails: (refund_uuid: string) =>
    `/merchants/refunds/${refund_uuid}`,
  Wallets: '/wallets',
  WalletTransactions: (account_uuid: string) => `/wallets/${account_uuid}`,
  WalletTransactionDetails: (wallet_uuid: string) =>
    `/wallets/${wallet_uuid}/transaction_details`,
  Profile: '/profile',
  Offers: '/gift_cards',
  GcProvider: '/gc_providers',
  GcBrands: '/gc_brands',
  GcBrandDetails: (brand_id: string) => `/gc_brands/${brand_id}`,
  GcProducts: '/gc_products',
  GcProductDetails: (product_id: string) => `/gc_products/${product_id}`,
  OfferDetails: (offer_id: string) => `/offers/${offer_id}`,
  Plans: '/plans',
  PlanDetails: (plan_uuid: string) => `/plans/${plan_uuid}`,
  InvoicePage: (merchant_uuid: string) => `/invoice/${merchant_uuid}`,
  MerchantInvoiceDetails: (invoice_uuid: string) =>
    `/merchants/billing/${invoice_uuid}`,
  Modes: '/payout_modes',
  ModeDetails: (mode_type: string) => `/redemption_methods/${mode_type}`,
  FeeRate: '/feerates',
  FeeRateDetails: (feerate_id: string) => `/feerates/${feerate_id}`,
  Workflows: '/workflows',
  WorkflowDetails: (workflow_name: string) => `/workflows/${workflow_name}`,
  DirectToCustomer: '/d2c_merchants',
  LLMProviders: '/llm_providers',
  PaymentPlans: '/payment_plans',
  PaymentPlanDetails: (uuid: string) => `/payment_plan/${uuid}`,
  D2CMerchantDetails: (merchant_name: string) => `/d2c/${merchant_name}`,
  InviteCodes: '/invite_codes',
  InviteCodeDetails: (invite_code: string) => `/invite_codes/${invite_code}`,
  WaitList: '/waitlist',
  WaitListDetails: (account_uuid: string) => `/waitlist/${account_uuid}`,
  Products: (account_uuid: string) => `/products/${account_uuid}`,
  AchPullEvents: (ach_pull_ref: string) => `/payments/ach/${ach_pull_ref}`,
  D2CListOrders: '/orders',
  D2COrderDetails: (checkout_uuid: string) =>
    `/orders/payments/${checkout_uuid}`,
  D2COrderAttempts: '/payments/ach/attempts',
  ListPrompts: '/llmProviders/prompts',
});
