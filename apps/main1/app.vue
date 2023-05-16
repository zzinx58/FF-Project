<script setup>
const testText = ref('Varlet123')
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <header class="pb-4">
      <var-avatar color="black">
        testText
      </var-avatar>
    </header>
    <div class="flex">
      <var-button block>
        123
      </var-button>
      <var-button block type="primary" class="bg-transparent" color="transparent">
        123
      </var-button>
      <var-button block type="success" color="transparent">
        123
      </var-button>
      <var-button block type="info">
        123
      </var-button>
      <var-button block type="warning">
        123
      </var-button>
      <var-button block type="danger">
        123
      </var-button>
      <var-button block type="danger">
        123
      </var-button>
    </div>
    <var-row>
      <var-col :span="8">
        <var-button type="danger" class="w-100%">
          123
        </var-button>
      </var-col>
      <var-col :span="8">
        <var-button type="danger" class="w-100%">
          123
        </var-button>
      </var-col>
      <var-col :span="8">
        <var-button type="danger" class="w-100%">
          123
        </var-button>
      </var-col>
    </var-row>
    <var-row>
      <var-col :span="16">
        <var-button type="danger" class="w-100%">
          123
        </var-button>
      </var-col>
      <var-col :span="8">
        <var-button type="danger" class="w-100%">
          123
        </var-button>
      </var-col>
    </var-row>
    <var-row>
      <var-col :span="6">
        <var-button type="danger" class="w-100%">
          123
        </var-button>
      </var-col>
      <var-col :span="6">
        <var-button type="danger" class="w-100%">
          123
        </var-button>
      </var-col>
      <var-col :span="6">
        <var-button type="danger" class="w-100%">
          123
        </var-button>
      </var-col>
      <var-col :span="6">
        <var-button type="danger" class="w-100%">
          123
        </var-button>
      </var-col>
    </var-row>

    <var-row class="flex">
      <var-col :span="6" class="items-center">
        1
      </var-col>
      <var-col :span="6">
        2
      </var-col>
      <var-col :span="6">
        3
      </var-col>
      <var-col :span="6">
        4
      </var-col>
    </var-row>
  </div>
  <main class="w-100vw bg-yellow-200">
    <var-row>
      <var-col :span="12">
        <var-image
          class="w-100%"
          src="https://p3-passport.byteimg.com/img/user-avatar/59296777f828ae4101819744e0ef154c~180x180.awebp"
        />
      </var-col>
      <var-col :span="12">
        <var-image
          class="w-100%"
          src="https://p3-passport.byteimg.com/img/user-avatar/59296777f828ae4101819744e0ef154c~180x180.awebp"
        />
      </var-col>
    </var-row>
  </main>
  <footer class="fixed bottom-0 w-100vw pb-4">
    <var-row>
      <var-col :span="6">
        <var-button block class="bg-transparent">
          首页
        </var-button>
      </var-col>
      <var-col :span="6">
        <var-button block>
          首页
        </var-button>
      </var-col>
      <var-col :span="6">
        <var-button block>
          首页
        </var-button>
      </var-col>
      <var-col :span="6">
        <var-button block>
          首页
        </var-button>
      </var-col>
    </var-row>
  </footer>
</template>

<style>
@import "@varlet/ui/es/style";
* {
  margin: 0px;
  padding: 0px;
}
</style>
