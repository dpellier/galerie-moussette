#!/bin/bash

echo "Initialisation de la base pictures..."

/usr/bin/mongo localhost/theGallery --eval "db.images.insert([
    {
        type:'pictures',
        href:'https://lh5.googleusercontent.com/-9tnXcUGX5JU/UbW5DaqdnnI/AAAAAAAAAUQ/scJZ2ABJxYw/w784-h588-no/picture1.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/c8Nz4Lspu8EON1P7moMzqoh4_8anxPLErQ8o9bvSnrg=w289-h216-p-no'
    },
    {
        type:'pictures',
        href:'https://lh3.googleusercontent.com/-eQ0sjAOXFCg/UbW5GynrNZI/AAAAAAAAAVk/Kk6oMBH82Ts/w648-h486-no/picture2.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/c8Nz4Lspu8EON1P7moMzqoh4_8anxPLErQ8o9bvSnrg=w289-h216-p-no'
    },
    {
        type:'pictures',
        href:'https://lh6.googleusercontent.com/-t6ebJmCpJBU/UbW5KKO_4II/AAAAAAAAAW0/vADCULvrC2M/w912-h514-no/picture3.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/XTiJkFHgC2Wrn1cAvIvPEkUHCT6jah37xSdbFvSCNGI=w385-h216-p-no'
    },
    {
        type:'pictures',
        href:'https://lh3.googleusercontent.com/-no7o5Cjv5lQ/UbW5KK8QNnI/AAAAAAAAAW8/jOR9fsgr5AI/w912-h514-no/picture4.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/EAc4U7EwCZZ0NwcVh7Wb3-kPKQwMTnIiuWIbqA8Y6J8=w385-h216-p-no'
    },
    {
        type:'pictures',
        href:'https://lh6.googleusercontent.com/-S2R4j0mehIw/UbW5Kpw5P5I/AAAAAAAAAXE/_ZL97m66fV0/w912-h514-no/picture5.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/xk4ooD18CeYFWkxb8m7Z_G_7uydDaq3ej32FQVMwWfw=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh3.googleusercontent.com/-Ti6WDOuEIK0/UbW5K8wV_TI/AAAAAAAAAXM/-yjgwOg7HAA/w912-h514-no/picture6.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/0cT9m1_52IxumguKFY-TY0pYqlS1_IQeUP5Mdjmm7fQ=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh6.googleusercontent.com/-Sdjqu4co3ls/UbW5LNN7eUI/AAAAAAAAAXU/1KizpBuhHi4/w912-h514-no/picture7.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/JTA_7hkfnjvAvr5YGRBzxcZ_xr9jypxt4KLtOI_rlgc=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh4.googleusercontent.com/-ra89hCjj-Vk/UbW5LXtwUqI/AAAAAAAAAXY/ccIP4q7S3Hc/w912-h514-no/picture8.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/MA6ZbRg7PrFDam0-zCx9pLeT3yuqm2QRq2wgJXlgQc4=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh3.googleusercontent.com/-JlMwTVTDDaE/UbW5Lq1-kqI/AAAAAAAAAXc/UugbJHmL6YI/w912-h514-no/picture9.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/UCjSP0OjbVKXaSFjmBKWlXRyoJZENUXwlR9tJgYLNMo=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh3.googleusercontent.com/-4rBuw1aYF9A/UbW5DWvj3VI/AAAAAAAAAUM/yyVIzDXbah4/w912-h514-no/picture10.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/FTU4zLKHxnUEZYlca4g3PiGbtKte_eObcBRoZP2Vmr8=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh4.googleusercontent.com/-lOUijmyouQU/UbW5Do4biCI/AAAAAAAAAUg/-OQRECGzVOg/w912-h514-no/picture11.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/EYnw_1ZexGi8-AUEHMbVafZLrS4PqhqkxxsQpGFoKOk=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh3.googleusercontent.com/-qwyl9aaFWf8/UbW5EhxsqOI/AAAAAAAAAUs/1R0TTSduzcg/w912-h514-no/picture12.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/S7YYuUkRCnifA0zUrsez7aadM-kEdPzHR6XQLbGWeXg=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh3.googleusercontent.com/-VQGDDu8qFCM/UbW5EiS6HRI/AAAAAAAAAUk/XRx0EOWLO4Q/w912-h514-no/picture13.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/KR4WNXqbO3ar8qm_o4kVb5w6Tx9roEZJHzHTxQ-YrY0=w359-h202-p-no'
    },
    {
        type:'pictures',
        href:'https://lh3.googleusercontent.com/-eymw-Y159f4/UbW5Eh1ivpI/AAAAAAAAAUw/1-FrDSKLPJg/w912-h514-no/picture14.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/4RTdRIc5QQEaXlIkIjXjwx499N5FsDt7R3h2rHya3U0=w359-h202-p-no'
    },
    {
        type:'pictures',
        href:'https://lh3.googleusercontent.com/-B43eWbXogJ8/UbW5FS4IK-I/AAAAAAAAAU8/LDqaZ-M_UHU/w512-h384-no/picture15.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/aYGxur3emUi1uWM6H1snjuu1RqF1TmJYeWUwloPcX3g=w270-h202-p-no'
    },
    {
        type:'pictures',
        href:'https://lh5.googleusercontent.com/-P86TFbfxrZ4/UbW5F2Ddq6I/AAAAAAAAAVM/LzLK8oPfQlw/w912-h514-no/picture16.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/IKe9I6-xZgOBnETPHW2gEDVj-WNSDt369TnkQg4C61o=w360-h202-p-no'
    },
    {
        type:'pictures',
        href:'https://lh6.googleusercontent.com/-I4JyvomIzRk/UbW5FpILwvI/AAAAAAAAAVE/r4h6-U-slv4/w912-h514-no/picture17.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/OVOzj7Soc9ChH0EGNukTfd4_6Ue9aRKVI9_oP_k6638=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh6.googleusercontent.com/-cVuCXKX-KVo/UbW5GB696fI/AAAAAAAAAVU/RiDIsgl6Gpg/w912-h514-no/picture18.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/WavcfJU2KDgqB1SJffYyTG4ErQMhJIu9oZOeuwB1TdM=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh4.googleusercontent.com/-Whhz3HfW1hA/UbW5GjNXs3I/AAAAAAAAAVc/crtyI4JARng/w912-h514-no/picture19.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/t9eX3u18CCs3praHkdRSzFjKs9dnL-rRo3MtE1rVycg=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh5.googleusercontent.com/-agD5b_vYL1g/UbW5HI1mBRI/AAAAAAAAAVs/yIeiCg-QxTo/w912-h514-no/picture20.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/sI12sZ305crQm5rHg7NIktAyLQBXsNMwUNonKnAD-jQ=w337-h189-p-no'
    },
    {
        type:'pictures',
        href:'https://lh4.googleusercontent.com/-GQVJ9LT669A/UbW5HTvKNuI/AAAAAAAAAV4/JVWaPYhYIb0/w912-h514-no/picture21.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/D1mSMjzYxeV-ZIygVbDrpNB1B2lxW2ein77TCEhlWls=w384-h216-p-no'
    },
    {
        type:'pictures',
        href:'https://lh3.googleusercontent.com/-n4e9WkBgMqw/UbW5HzWLeEI/AAAAAAAAAWI/eTSfDCLOC8Y/w912-h514-no/picture22.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/GGHW4F5e_uPSpnkS_UYONrIo4UZcgjqS-5doZDwy7ds=w384-h216-p-no'
    },
    {
        type:'pictures',
        href:'https://lh3.googleusercontent.com/-o-Ah2Qz08Ms/UbW5IM3jeaI/AAAAAAAAAV8/splews58TNM/w512-h384-no/picture23.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/jR6zbXdROtzHyduj-8r8-uvv0gC9yrgpYnl9Ew_z67s=w290-h216-p-no'
    },
    {
        type:'pictures',
        href:'https://lh4.googleusercontent.com/-0_5gV3H-79w/UbW5Ib8HHoI/AAAAAAAAAWA/1YJ8YV8_RSU/w512-h384-no/picture24.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/NwhHDXHDadWGKCeoxeMjJJp53DB7U5FdnS4zjTbptf0=w290-h216-p-no'
    },
    {
        type:'pictures',
        href:'https://lh4.googleusercontent.com/-fHTeN9QSBEE/UbW5Io9S_UI/AAAAAAAAAWo/6ejUkjCQbAA/w512-h384-no/picture25.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/MXBPkLZ4IINJFVD11M3Pee7W9sCJ-AQGCtxr8hBdf_s=w289-h216-p-no'
    },
    {
        type:'pictures',
        href:'https://lh5.googleusercontent.com/-XWKOpXg17vI/UbW5I27ulqI/AAAAAAAAAWU/AjYDen7g6-c/w512-h384-no/picture26.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/RN3TbIyqy9zu6o-ZJnJkIjIJ4bAMkZbA7JQcnQFJuoc=w289-h216-p-no'
    },
    {
        type:'pictures',
        href:'https://lh5.googleusercontent.com/-xdbbqeHy4vo/UbW5Ix7ZyjI/AAAAAAAAAWc/QveP1abK0As/w912-h514-no/picture27.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/1U6riiId7_r-08gt4I_yHJIrrXHNhuJuCxJYTfWtWxM=w385-h216-p-no'
    },
    {
        type:'pictures',
        href:'https://lh4.googleusercontent.com/-L7ziTCOrKjY/UbW5JjebKsI/AAAAAAAAAWs/15kQeoG7tBw/w912-h514-no/picture28.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/2IL1RY7II96y3OnVZQ7BN2Aq1-zCBN2d_G0NWLX2ZlI=w385-h216-p-no'
    }
])"

echo "Done !"