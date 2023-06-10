// Purpose: Define types for the application

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
};

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
