#!/bin/bash

echo "Initialisation de la base drawings..."

/usr/bin/mongo localhost/theGallery --eval "db.images.insert([
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    },
    {
        type:'drawings',
        href: '',
        hrefMin: ''
    }
])"

echo "Done !"