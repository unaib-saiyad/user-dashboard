import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import SkeletonCard from "../components/SkeletonCard";

const tempUserData = [
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Batur",
      "last": "Özbey"
    },
    "location": {
      "street": {
        "number": 4390,
        "name": "Filistin Cd"
      },
      "city": "Muş",
      "state": "Karabük",
      "country": "Turkey",
      "postcode": 54355,
      "coordinates": {
        "latitude": "65.1434",
        "longitude": "-97.9503"
      },
      "timezone": {
        "offset": "-2:00",
        "description": "Mid-Atlantic"
      }
    },
    "email": "batur.ozbey@example.com",
    "login": {
      "uuid": "1f6799f7-75f8-473e-a10e-d37a3fd8dfa0",
      "username": "beautifultiger874",
      "password": "bacon",
      "salt": "Ct0GCo6A",
      "md5": "5e8e7295528cc5fe5620f5a547f82306",
      "sha1": "cde39547bd40fc74f203e6221a9c77fc1f3a4571",
      "sha256": "2b2d211c67db3364da2cf1443c18f4824d5dad810e546456706a79f469ca8441"
    },
    "dob": {
      "date": "1957-02-14T20:43:10.957Z",
      "age": 69
    },
    "registered": {
      "date": "2011-12-29T04:11:51.339Z",
      "age": 14
    },
    "phone": "(298)-589-6030",
    "cell": "(827)-912-8106",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/64.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/64.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/64.jpg"
    },
    "nat": "TR"
  },
  {
    "gender": "female",
    "name": {
      "title": "Ms",
      "first": "Lærke",
      "last": "Petersen"
    },
    "location": {
      "street": {
        "number": 1610,
        "name": "Egeparken"
      },
      "city": "Lundby",
      "state": "Nordjylland",
      "country": "Denmark",
      "postcode": 72101,
      "coordinates": {
        "latitude": "-33.6238",
        "longitude": "-151.7791"
      },
      "timezone": {
        "offset": "+1:00",
        "description": "Brussels, Copenhagen, Madrid, Paris"
      }
    },
    "email": "laerke.petersen@example.com",
    "login": {
      "uuid": "d3bf33e1-0a4c-49ce-b227-8be48c5a4c3e",
      "username": "tinypanda370",
      "password": "coldbeer",
      "salt": "6qFYuQrU",
      "md5": "77f88c200bcf21d9b262893da8237376",
      "sha1": "4ac26485a3078a5891f3d39c7046b3d2c5fee37d",
      "sha256": "85ca02ac3e509914b0ef6105b031496c2832bcd92eea93ce385a979609bc3372"
    },
    "dob": {
      "date": "1967-06-02T12:05:21.827Z",
      "age": 59
    },
    "registered": {
      "date": "2008-10-03T21:37:02.984Z",
      "age": 17
    },
    "phone": "86669088",
    "cell": "39705692",
    "id": {
      "name": "CPR",
      "value": "020667-4092"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/45.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
    },
    "nat": "DK"
  },
  {
    "gender": "female",
    "name": {
      "title": "Miss",
      "first": "Lilia",
      "last": "Portillo"
    },
    "location": {
      "street": {
        "number": 5539,
        "name": "Calzada Sur Alva"
      },
      "city": "Holbox",
      "state": "Hidalgo",
      "country": "Mexico",
      "postcode": 50568,
      "coordinates": {
        "latitude": "39.5804",
        "longitude": "-71.8342"
      },
      "timezone": {
        "offset": "+7:00",
        "description": "Bangkok, Hanoi, Jakarta"
      }
    },
    "email": "lilia.portillo@example.com",
    "login": {
      "uuid": "657d9bbe-0dd5-4eb0-9af3-70f4ac9b3c84",
      "username": "tinymouse875",
      "password": "rayray",
      "salt": "CmZ56zj0",
      "md5": "55cee9b5679ee980569099aef557cc16",
      "sha1": "52c8c408ed2b87dc5d9b5526ea9afcd071d7d12d",
      "sha256": "336e65a52c6fcdd4912acbb886af28c31fd336984802eda106322f28ab4b81d0"
    },
    "dob": {
      "date": "1979-12-26T06:28:42.174Z",
      "age": 46
    },
    "registered": {
      "date": "2002-04-06T17:50:14.648Z",
      "age": 24
    },
    "phone": "(674) 625 9091",
    "cell": "(604) 638 3129",
    "id": {
      "name": "NSS",
      "value": "35 95 25 2464 8"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/66.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/66.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/66.jpg"
    },
    "nat": "MX"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Liam",
      "last": "Carpentier"
    },
    "location": {
      "street": {
        "number": 3238,
        "name": "Rue Bony"
      },
      "city": "Créteil",
      "state": "Savoie",
      "country": "France",
      "postcode": 47685,
      "coordinates": {
        "latitude": "-28.9480",
        "longitude": "-24.8158"
      },
      "timezone": {
        "offset": "-6:00",
        "description": "Central Time (US & Canada), Mexico City"
      }
    },
    "email": "liam.carpentier@example.com",
    "login": {
      "uuid": "773dee62-fbd9-4d90-ac7b-38e1e207b6c5",
      "username": "blackbutterfly554",
      "password": "keegan",
      "salt": "hFCodfHq",
      "md5": "6ae8ae16a30736dcb7467480708f7e8f",
      "sha1": "4d845c0674d5306a13e79ff9a4747a7cfd0e9904",
      "sha256": "94b640eb16d7f78a768c6529cda2362fe1bbfac635310b64b938788e77ae871d"
    },
    "dob": {
      "date": "1991-10-29T18:14:47.279Z",
      "age": 34
    },
    "registered": {
      "date": "2019-10-05T04:12:56.852Z",
      "age": 6
    },
    "phone": "04-76-98-91-41",
    "cell": "06-60-60-92-50",
    "id": {
      "name": "INSEE",
      "value": "1910911416322 93"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/3.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/3.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/3.jpg"
    },
    "nat": "FR"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Dragan",
      "last": "Erceg"
    },
    "location": {
      "street": {
        "number": 8103,
        "name": "Porodice Gajić"
      },
      "city": "Vrnjačka Banja",
      "state": "Pirot",
      "country": "Serbia",
      "postcode": 25947,
      "coordinates": {
        "latitude": "-63.5897",
        "longitude": "-73.2692"
      },
      "timezone": {
        "offset": "-4:00",
        "description": "Atlantic Time (Canada), Caracas, La Paz"
      }
    },
    "email": "dragan.erceg@example.com",
    "login": {
      "uuid": "f49f9394-6a7d-4617-a356-4d6187301848",
      "username": "lazyzebra938",
      "password": "angie",
      "salt": "XC5FsCHc",
      "md5": "56e72e7a16095bcfcec334dd93b87c8f",
      "sha1": "ed75c89522bb65a0c06971a7f2c3711f87c5c950",
      "sha256": "b1584587ba9a876802297c3b2eedc638de6ad806b32d782b339fd5bb5f6802a4"
    },
    "dob": {
      "date": "1969-05-27T01:19:03.398Z",
      "age": 57
    },
    "registered": {
      "date": "2003-12-14T12:54:44.245Z",
      "age": 22
    },
    "phone": "034-4193-666",
    "cell": "068-1032-788",
    "id": {
      "name": "SID",
      "value": "383325182"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/49.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/49.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg"
    },
    "nat": "RS"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Santiago",
      "last": "Pedroza"
    },
    "location": {
      "street": {
        "number": 8759,
        "name": "Boulevard Colima"
      },
      "city": "San Pedro Garza García",
      "state": "Quintana Roo",
      "country": "Mexico",
      "postcode": 53393,
      "coordinates": {
        "latitude": "-60.0425",
        "longitude": "-143.3653"
      },
      "timezone": {
        "offset": "-6:00",
        "description": "Central Time (US & Canada), Mexico City"
      }
    },
    "email": "santiago.pedroza@example.com",
    "login": {
      "uuid": "8dd09c9e-ef17-42a0-a1f3-912162a544d7",
      "username": "goldenrabbit749",
      "password": "harley1",
      "salt": "DbZgNlMy",
      "md5": "dad3e45bcb7d08d569b304aebdeac713",
      "sha1": "70a016401df6a695d467f072e2a5591b163d55ee",
      "sha256": "b3a2d7d810bbcf6d31ab05849a936c9565bbff8d569dd7624869a928d0d59d11"
    },
    "dob": {
      "date": "1973-05-11T00:04:52.270Z",
      "age": 53
    },
    "registered": {
      "date": "2016-03-14T14:36:14.381Z",
      "age": 10
    },
    "phone": "(631) 039 8283",
    "cell": "(675) 517 6013",
    "id": {
      "name": "NSS",
      "value": "27 99 82 8641 2"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/47.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
    },
    "nat": "MX"
  }
]

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <h2 className="page-title mb-0">
          <i className="bi bi-people-fill me-2 text-primary"></i>
          User Dashboard
        </h2>
        <div className="d-flex gap-3 w-100 w-md-auto">
          <div className="search-wrapper flex-grow-1">
            <i className="bi bi-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search users..."
              aria-label="Search users"
            />
          </div>
          <button className="btn btn-primary btn-create-user">
            <i className="bi bi-plus-lg"></i>
            <span className="d-none d-sm-inline">Create New User</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="row g-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={item}>
              <SkeletonCard />
            </div>
          ))}
        </div>
      ) : (
        <div className="row g-4">
          {tempUserData.map((user) => (
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={user.login.uuid}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;