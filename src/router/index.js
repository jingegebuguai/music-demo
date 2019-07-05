import Vue from 'vue'
import Router from 'vue-router'
// import Singer from 'cpnts/singer/singer'
// import Recommend from 'cpnts/recommend/recommend'
// import Rank from 'cpnts/rank/rank'
// import Search from 'cpnts/search/search'
// import MusicList from 'cpnts/music-list/music-list'
// import SingerDetail from 'cpnts/singer-detail/singer-detail'
// import RankDetail from 'cpnts/rank-detail/rank-detail'
// import User from 'cpnts/user/user'

Vue.use(Router)

const Index = (resolve) => {
  import('cpnts/index/index').then((module) => {
    resolve(module)
  })
}

const RecommendAndDisc = (resolve) => {
  import('cpnts/index/recommendAndDisc').then((module) => {
    resolve(module)
  })
}

const Account = (resolve) => {
  import('cpnts/account/account').then((module) => {
    resolve(module)
  })
}

// const Recommend = (resolve) => {
//   import('cpnts/recommend/recommend').then((module) => {
//     resolve(module)
//   })
// }
const Singer = (resolve) => {
  import('cpnts/singer/singer').then((module) => {
    resolve(module)
  })
}

const Rank = (resolve) => {
  import('cpnts/rank/rank').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('cpnts/search/search').then((module) => {
    resolve(module)
  })
}

const SingerDetail = (resolve) => {
  import('cpnts/singer-detail/singer-detail').then((module) => {
    resolve(module)
  })
}

const MusicList = (resolve) => {
  import('cpnts/music-list/music-list').then((module) => {
    resolve(module)
  })
}

const RankDetail = (resolve) => {
  import('cpnts/rank-detail/rank-detail').then((module) => {
    resolve(module)
  })
}

const User = (resolve) => {
  import('cpnts/user/user').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: RecommendAndDisc,
          meta: {
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/singer',
      component: Singer,
      meta: {
        keepAlive: true
      },
      children: [
        {
          path: ':id',
          component: SingerDetail,
          meta: {
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: 'singer/:id',
          component: SingerDetail
        },
        {
          path: 'list/:id',
          component: MusicList
        }
      ]
    },
    {
      path: '/user',
      component: User
    }
  ]
})
