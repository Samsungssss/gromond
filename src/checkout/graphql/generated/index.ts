import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useCheckoutQuery(options: Omit<Urql.UseQueryArgs<Operations.CheckoutQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.CheckoutQuery, Operations.CheckoutQueryVariables>({ query: Operations.CheckoutDocument, ...options });
};

export function useCheckoutCommerceContextQuery(options: Omit<Urql.UseQueryArgs<Operations.CheckoutCommerceContextQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.CheckoutCommerceContextQuery, Operations.CheckoutCommerceContextQueryVariables>({ query: Operations.CheckoutCommerceContextDocument, ...options });
};

export function useChannelQuery(options: Omit<Urql.UseQueryArgs<Operations.ChannelQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.ChannelQuery, Operations.ChannelQueryVariables>({ query: Operations.ChannelDocument, ...options });
};

export function useCheckoutLinesUpdateMutation() {
  return Urql.useMutation<Operations.CheckoutLinesUpdateMutation, Operations.CheckoutLinesUpdateMutationVariables>(Operations.CheckoutLinesUpdateDocument);
};

export function useCheckoutLineDeleteMutation() {
  return Urql.useMutation<Operations.CheckoutLineDeleteMutation, Operations.CheckoutLineDeleteMutationVariables>(Operations.CheckoutLineDeleteDocument);
};

export function useCheckoutEmailUpdateMutation() {
  return Urql.useMutation<Operations.CheckoutEmailUpdateMutation, Operations.CheckoutEmailUpdateMutationVariables>(Operations.CheckoutEmailUpdateDocument);
};

export function useCheckoutMetadataUpdateMutation() {
  return Urql.useMutation<Operations.CheckoutMetadataUpdateMutation, Operations.CheckoutMetadataUpdateMutationVariables>(Operations.CheckoutMetadataUpdateDocument);
};

export function useCheckoutCustomerAttachMutation() {
  return Urql.useMutation<Operations.CheckoutCustomerAttachMutation, Operations.CheckoutCustomerAttachMutationVariables>(Operations.CheckoutCustomerAttachDocument);
};

export function useCheckoutCustomerDetachMutation() {
  return Urql.useMutation<Operations.CheckoutCustomerDetachMutation, Operations.CheckoutCustomerDetachMutationVariables>(Operations.CheckoutCustomerDetachDocument);
};

export function useCheckoutCreateMutation() {
  return Urql.useMutation<Operations.CheckoutCreateMutation, Operations.CheckoutCreateMutationVariables>(Operations.CheckoutCreateDocument);
};

export function useCheckoutLinesAddMutation() {
  return Urql.useMutation<Operations.CheckoutLinesAddMutation, Operations.CheckoutLinesAddMutationVariables>(Operations.CheckoutLinesAddDocument);
};

export function useCheckoutShippingAddressUpdateMutation() {
  return Urql.useMutation<Operations.CheckoutShippingAddressUpdateMutation, Operations.CheckoutShippingAddressUpdateMutationVariables>(Operations.CheckoutShippingAddressUpdateDocument);
};

export function useCheckoutBillingAddressUpdateMutation() {
  return Urql.useMutation<Operations.CheckoutBillingAddressUpdateMutation, Operations.CheckoutBillingAddressUpdateMutationVariables>(Operations.CheckoutBillingAddressUpdateDocument);
};

export function useCheckoutDeliveryMethodUpdateMutation() {
  return Urql.useMutation<Operations.CheckoutDeliveryMethodUpdateMutation, Operations.CheckoutDeliveryMethodUpdateMutationVariables>(Operations.CheckoutDeliveryMethodUpdateDocument);
};

export function useAddressValidationRulesQuery(options: Omit<Urql.UseQueryArgs<Operations.AddressValidationRulesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.AddressValidationRulesQuery, Operations.AddressValidationRulesQueryVariables>({ query: Operations.AddressValidationRulesDocument, ...options });
};

export function useCheckoutAddPromoCodeMutation() {
  return Urql.useMutation<Operations.CheckoutAddPromoCodeMutation, Operations.CheckoutAddPromoCodeMutationVariables>(Operations.CheckoutAddPromoCodeDocument);
};

export function useCheckoutRemovePromoCodeMutation() {
  return Urql.useMutation<Operations.CheckoutRemovePromoCodeMutation, Operations.CheckoutRemovePromoCodeMutationVariables>(Operations.CheckoutRemovePromoCodeDocument);
};

export function useCheckoutCompleteMutation() {
  return Urql.useMutation<Operations.CheckoutCompleteMutation, Operations.CheckoutCompleteMutationVariables>(Operations.CheckoutCompleteDocument);
};

export function useDeliveryOptionsCalculateMutation() {
  return Urql.useMutation<Operations.DeliveryOptionsCalculateMutation, Operations.DeliveryOptionsCalculateMutationVariables>(Operations.DeliveryOptionsCalculateDocument);
};

export function useOrderQuery(options: Omit<Urql.UseQueryArgs<Operations.OrderQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.OrderQuery, Operations.OrderQueryVariables>({ query: Operations.OrderDocument, ...options });
};

export function useOrdersByNumberQuery(options: Omit<Urql.UseQueryArgs<Operations.OrdersByNumberQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.OrdersByNumberQuery, Operations.OrdersByNumberQueryVariables>({ query: Operations.OrdersByNumberDocument, ...options });
};

export function usePaymentGatewaysInitializeMutation() {
  return Urql.useMutation<Operations.PaymentGatewaysInitializeMutation, Operations.PaymentGatewaysInitializeMutationVariables>(Operations.PaymentGatewaysInitializeDocument);
};

export function useTransactionInitializeMutation() {
  return Urql.useMutation<Operations.TransactionInitializeMutation, Operations.TransactionInitializeMutationVariables>(Operations.TransactionInitializeDocument);
};

export function useTransactionProcessMutation() {
  return Urql.useMutation<Operations.TransactionProcessMutation, Operations.TransactionProcessMutationVariables>(Operations.TransactionProcessDocument);
};

export function useUserQuery(options?: Omit<Urql.UseQueryArgs<Operations.UserQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.UserQuery, Operations.UserQueryVariables>({ query: Operations.UserDocument, ...options });
};

export function useUserRegisterMutation() {
  return Urql.useMutation<Operations.UserRegisterMutation, Operations.UserRegisterMutationVariables>(Operations.UserRegisterDocument);
};

export function useRequestPasswordResetMutation() {
  return Urql.useMutation<Operations.RequestPasswordResetMutation, Operations.RequestPasswordResetMutationVariables>(Operations.RequestPasswordResetDocument);
};

export function useUserAddressDeleteMutation() {
  return Urql.useMutation<Operations.UserAddressDeleteMutation, Operations.UserAddressDeleteMutationVariables>(Operations.UserAddressDeleteDocument);
};

export function useUserAddressUpdateMutation() {
  return Urql.useMutation<Operations.UserAddressUpdateMutation, Operations.UserAddressUpdateMutationVariables>(Operations.UserAddressUpdateDocument);
};

export function useUserAddressCreateMutation() {
  return Urql.useMutation<Operations.UserAddressCreateMutation, Operations.UserAddressCreateMutationVariables>(Operations.UserAddressCreateDocument);
};

export function useUserSetDefaultAddressMutation() {
  return Urql.useMutation<Operations.UserSetDefaultAddressMutation, Operations.UserSetDefaultAddressMutationVariables>(Operations.UserSetDefaultAddressDocument);
};