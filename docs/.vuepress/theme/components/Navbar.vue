<template>
  <div class="header-container">
    <div class="header-layout">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
      <div class="home-link">
        <router-link
          :to="$localePath"
        >
          <img
            class="logo"
            v-if="$site.themeConfig.logo"
            :src="$withBase($site.themeConfig.logo)"
            :alt="$siteTitle"
          >
          <span
            ref="siteName"
            class="site-name"
            v-if="$siteTitle && !$site.themeConfig.logo"
            :class="{ 'can-hide': $site.themeConfig.logo }"
          >{{ $siteTitle }}</span>
        </router-link>
      </div>

      <div class="links" :style="linksWrapMaxWidth ? {'max-width': linksWrapMaxWidth + 'px' } : {}">
        <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
        <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
        <NavLinks class="can-hide"/>
      </div>
    </div>
  </div>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = .8rem
$navbar-horizontal-padding = 1.5rem

.header-container
  .header-layout
    min-height 2.6rem
    padding $navbar-vertical-padding $navbar-horizontal-padding
  span, img
    display inline-block
    vertical-align middle
  .home-link
    float left
    line-height 2.5rem
    a
      display block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
  .site-name
    font-size 1.38rem
    font-weight 500
    color $homeColor
    position relative
    font-family Helvetica,Arial,sans-serif
  .links
    float right
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    display flex
    align-items center
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .header-container
    padding-left 4rem
    .can-hide
      display none
    .links
      position absolute
      top $navbar-vertical-padding + 0.2rem
      right $navbar-horizontal-padding
      padding-left 0
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
