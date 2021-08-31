// Test

import { groupby } from 'itertools'

const things = [
    {id: 1, name: 'foo'},
    {id: 2, name: 'bar'},
]

const x = [...groupby(things, thing => thing.id)]
console.log(x[0])
console.log(x['foo'])

const y = [...groupby(things, thing => thing.name)]
console.log(y[0])
console.log(y['foo'])
