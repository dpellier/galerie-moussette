#!/bin/bash

echo "Initialisation de la base collages..."

/usr/bin/mongo localhost/theGallery --eval "db.images.insert([
    {
        type:'collages',
        href: 'https://lh4.googleusercontent.com/-susDgbXNJ9E/UbW9O4mpftI/AAAAAAAAAak/NkcWPbvx2iA/w428-h588-no/Collage3.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/4yevf92d3JHgPNglOnPbDqbe9SBBtiWp1ZaRoqNXrbg=w148-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-Gdtz8DWlg9E/UbW9Sq5ZkmI/AAAAAAAAAb8/1gfqlwcR4uQ/w428-h588-no/Collage4.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/-H14_0mE1NMjA-O5mrwsY8RmQ1B2i0f1ZwNrVt3P1h4=w148-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh5.googleusercontent.com/-fOEZdhyukIs/UbW9SwSuoII/AAAAAAAAAcA/L07LlhW8xcI/w428-h588-no/Collage5.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/0894ENWXlsoBopwlBwcHsX3yIVfkFU6U_6_tulDXuzk=w148-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh5.googleusercontent.com/wuAm1surHtgFKwIVR4LzRQIP25YfRVApn6y4CEpcGs8=w428-h588-no',
        hrefMin: 'https://lh4.googleusercontent.com/wuAm1surHtgFKwIVR4LzRQIP25YfRVApn6y4CEpcGs8=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-ZP9Rmh9Va-Y/UbW9TkTVlxI/AAAAAAAAAcI/y8FhIwdkoaE/w428-h588-no/Collage8.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/TVzwuXvd27CUPCkGS1i1HTadHXKtlYSk8uF2FJqvjrE=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh5.googleusercontent.com/-kuPzE2f_6-0/UbW9IUamo9I/AAAAAAAAAYY/Eo-FZdnLPYA/w428-h588-no/Collage10.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/PioP_WarPSMwjO3mM2lljsw97Bdolkk6JAuLaFH-BTM=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-RBUfwBzbU2c/UbW9IVISZeI/AAAAAAAAAYc/RwQA7octuZw/w428-h588-no/Collage11.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/U3kRr2O4bu5IpVMR7YwR5yLE01R0L6zWy8rJYyrbE-Y=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-BwD3TLkqAEg/UbW9IQYAquI/AAAAAAAAAYM/YIUeLPdSkVc/w428-h588-no/Collage12.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/V8fXxcA3_1o7JOAoD5M5j6D1ob3_Cjblbi3PjYpNApo=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh4.googleusercontent.com/-PUPL_MIzFyE/UbW9JV4PlYI/AAAAAAAAAYo/BdPmG9WNFVU/w428-h588-no/Collage13.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/C_cSysVM5LXW47Y2tOrQj7d0673fx63AWfTC39OU81g=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-P9qD14h7_TI/UbW9JSWmmRI/AAAAAAAAAYw/QAOOfR4ElgY/w428-h588-no/Collage14.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/xKYlxtFbBcgSyqWLS8zToQ2igshFqsru-Mf7Je-4ss4=w148-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh6.googleusercontent.com/-y2CUyxYm1r0/UbW9JTancmI/AAAAAAAAAY0/GzauLmS81Gc/w428-h588-no/Collage15.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/jFG7FApW8UY9cWD0pK39Pv94zWMlbv2jERBxFJX4DfU=w148-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh4.googleusercontent.com/-26po4ndKAJ4/UbW9KebFPnI/AAAAAAAAAZQ/1mo2TU30Tdo/w428-h588-no/Collage16.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/P4HkJVrfjZ5ECSfwmbzpW7fUvU5Zdnga8w85sA_KMSQ=w148-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh4.googleusercontent.com/-LdJN2ci5G0U/UbW9Ks9ihKI/AAAAAAAAAZE/7hpkYA9BYHk/w428-h588-no/Collage17.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/xQocAxcTJMFdp3JDeulJseetCCeg8j9ThzLk4mdBL3k=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh4.googleusercontent.com/-P_Cq5OLOf4s/UbW9KyqHtVI/AAAAAAAAAZc/wVPDO3cmxR0/w428-h588-no/Collage18.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/pUYDkV3IgMGdkCUWO8s7DUNrvlfGzA3gRaHH-dEfiFA=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh6.googleusercontent.com/-mlvg8_fVl4U/UbW9LFuingI/AAAAAAAAAZg/l1DgMl6Y0As/w428-h588-no/Collage19.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/ea4wzEeMX-lAwZUExJLGz5jDEOYrsANZoDvZAROPdWw=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-7eT5OrFJtAg/UbW9LhDvBcI/AAAAAAAAAZM/AZlf_eNoMeY/w428-h588-no/Collage20.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/In0q7ikGy3hRRR5q-L1FaMaliiYR3qd8jrNEhcvO4FI=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh6.googleusercontent.com/-EaDiE3DsOAQ/UbW9L1YTpfI/AAAAAAAAAZo/yraXEdUJVO8/w428-h588-no/Collage21.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/I2ryaLxuaw56ayxOVDqd4u3SiOcVUg-FDihOwb9-0UU=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh4.googleusercontent.com/-pme1_8nbsDE/UbW9MbzH8aI/AAAAAAAAAZs/9POWi0GGRrA/w428-h588-no/Collage22.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/lW58sVmrbi1isyZEt5gl0P82rtHqu6zx5B3tzumjQ7c=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh6.googleusercontent.com/-jF3QC3KhuXY/UbW9MoY8R-I/AAAAAAAAAZw/HB0SHJDf_nM/w428-h588-no/Collage23.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/EUF7fpjO9QM77-7Lcwm9ErwEr_LyMjHkWtQuD2tPKsg=w148-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-B10NR8eKsts/UbW9MoIhmBI/AAAAAAAAAZ8/CUM1lrdf1cM/w428-h588-no/Collage24.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/-mGyGA1E8f31UpQTnMoLqxknWy6Jx5VOtgHoU-W585M=w148-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh5.googleusercontent.com/-2CZVe50X14g/UbW9NGXf1oI/AAAAAAAAAaA/3qnvIoz32hA/w428-h588-no/Collage25.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/pzT-eObK87lt-0468oX-EnGvFnP0wxdzKfgTzJmcVzc=w148-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh5.googleusercontent.com/-uE4nrhE4lBs/UbW9NntrmNI/AAAAAAAAAaQ/JarHvS6Snqk/w428-h588-no/Collage26.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/-JZBYx1sN7a7kFggF0OF1kn7US_OvXQ2L2WyretJMEA=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-OE05R5jQYP4/UbW9NsnDazI/AAAAAAAAAao/ByrDX3sHueY/w428-h588-no/Collage27.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/Z5oLj0_NVKE8ik34C_lJERrW3EAfQRbjiybum2qfbCg=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh6.googleusercontent.com/-LT6uu5LbAJM/UbW9N-Vbs9I/AAAAAAAAAaU/iSbMt617p2c/w428-h588-no/Collage28.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/87Umrff2h7RZzvbJdv3LluMVZNEDyPKuccxO-tUt_jY=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-6CFvLjCneq0/UbW9OqqT0sI/AAAAAAAAAaw/U_-4JLwRanE/w428-h588-no/Collage29.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/b96f3kTddXY4wyAs3ln3aeqJ-RshUpk7N-ERt93PSrI=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-b_V6jNdvSbc/UbW9PD2Zb0I/AAAAAAAAAbA/J-qFPz48x9Y/w428-h588-no/Collage30.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/_FIJ7VKjDwu84uFyIStI2BBBq9lVv2hnrQO0CyvKOiI=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh5.googleusercontent.com/-5tCfvVKD5k8/UbW9Puf1hhI/AAAAAAAAAa4/o2deyESR63Y/w428-h588-no/Collage31.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/JdO5eakuLEbRVb85RN-cdXSIUkr40emQvJlDfVT3OIU=w149-h204-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-qByM-GaM2TM/UbW9PzyebZI/AAAAAAAAAbE/wAH2Fh0SM0g/w428-h588-no/Collage32.jpg',
        hrefMin: 'https://lh4.googleusercontent.com/jHAO1YCSLu7KlLCRROdZaCQ0JTXKMLg-dddokyiP8QU=w150-h207-p-no'
    },
    {
        type:'collages',
        href: 'https://lh5.googleusercontent.com/-NJQ5wsQrreo/UbW9QZ2W0JI/AAAAAAAAAbU/I-tON-zCKpI/w428-h588-no/Collage33.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/cILcEd4fBVIGSA4LL323MlPLwcy_X1uAnrh7dHgzE6A=w150-h207-p-no'
    },
    {
        type:'collages',
        href: 'https://lh6.googleusercontent.com/-jBoB7gApLfc/UbW9Qv2qMDI/AAAAAAAAAbg/yuTvjdF3S58/w428-h588-no/Collage34.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/C33p9uHHKXAb59jpRRDatmk6wVFJ0tGN4l0MhqnhS1E=w150-h207-p-no'
    },
    {
        type:'collages',
        href: 'https://lh3.googleusercontent.com/-cPbyZMOa-Qs/UbW9Q1PY1oI/AAAAAAAAAbM/IbkMxME5ryw/w428-h588-no/Collage35.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/nW76-oc_Z2NV2slprmKVRLumJQWwIkP89d-G1vwJ7oo=w150-h207-p-no'
    },
    {
        type:'collages',
        href: 'https://lh6.googleusercontent.com/-tA2E8sAvr5A/UbW9RJ4SsOI/AAAAAAAAAb0/Xhr559gDOVk/w428-h588-no/Collage36.jpg',
        hrefMin: 'https://lh3.googleusercontent.com/VPwqZbWLuwhwRKoqllfNxnee3kapwpzY7yotG92wCVg=w150-h207-p-no'
    },
    {
        type:'collages',
        href: 'https://lh6.googleusercontent.com/-jMCFQX1CCqI/UbW9Rjn-QsI/AAAAAAAAAb4/7Mf7pOGem8g/w428-h588-no/Collage37.jpg',
        hrefMin: 'https://lh6.googleusercontent.com/ZhFjIjN4-dN1BJPe4IrLeVkC1NL7WKlMWqwvAwsv-Fk=w150-h207-p-no'
    },
    {
        type:'collages',
        href: 'https://lh6.googleusercontent.com/-iDIqi19cIJE/UbW9SBdossI/AAAAAAAAAbs/Dsyyw7e5A9w/w428-h588-no/Collage38.jpg',
        hrefMin: 'https://lh5.googleusercontent.com/7rjhBCkACdzJmp2Fg8-XgvNTR7j_97c8fa9Nl0Rjc3Q=w150-h207-p-no'
    }
])"

echo "Done !"