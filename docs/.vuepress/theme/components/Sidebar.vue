<template>
  <div class="sidebar">
    <NavLinks/>
    <slot name="top"/>
    <SidebarLinks :depth="0" :items="items"/>
    <slot name="bottom"/>
  </div>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items']
}
</script>

<style lang="stylus">
.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 500
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1rem
  & > .sidebar-ul
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1rem
      padding: 0.858rem 1rem 0.858rem 1.25rem;
      transition color .25s ease-in-out
      -webkit-transition color .25s ease-in-out

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      margin-left 0
      a
        display flex
        width 100%
        padding 0.85rem 1.5rem
        justify-content space-between
        align-items center
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-ul
      padding 1rem 0
</style>
