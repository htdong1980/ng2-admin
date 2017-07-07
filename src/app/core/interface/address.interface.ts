/* Address store address information
 * {'Home 1', 'Line 01', 'Line 02', 'Line 03', 'Line 04', 'Province', 'Country', 'Postcode'}
 * {'Home 2', 'Line 01', 'Line 02', 'Line 03', 'Line 04', 'Province', 'Country', 'Postcode'}
 * {'Office', 'Line 01', 'Line 02', 'Line 03', 'Line 04', 'Province', 'Country', 'Postcode'}
 */
export interface Address {
  property: string;
  line01: string;
  line02: string;
  line03: string;
  line04: string;
  province: string;
  country: string;
  postcode: string;
}
