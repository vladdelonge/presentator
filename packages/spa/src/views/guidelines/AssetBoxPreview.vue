<template>
    <div class="box box-card box-compact"
        :class="{'box-color': asset.isColor}"
        @mouseleave="$refs.assetDropdown ? $refs.assetDropdown.hide() : true"
    >
        <figure class="box-thumb" :style="{'background': asset.hex}">
            <template v-if="asset.isFile">
                <div class="crop-wrapper">
                    <img v-if="asset.isImage" :src="asset.getFileUrl('medium')" :alt="asset.title" class="img">
                    <span v-else class="img img-alt">{{ asset.fileExtension }}</span>
                </div>
            </template>

            <div class="thumb-overlay">
                <template v-if="asset.isImage">
                    <div class="overlay-ctrl" @click.prevent="openPreviewPopup()"></div>

                    <div class="box-ctrl handle center" @click.prevent="openPreviewPopup()">
                        <i class="fe fe-eye"></i>
                    </div>
                </template>

                <div class="box-ctrl handle top-right">
                    <i class="fe fe-more-horizontal" :style="{'color': asset.isColor ? asset.contrastHex : null}"></i>

                    <toggler class="dropdown dropdown-sm" ref="assetDropdown">
                        <a v-if="asset.isFile"
                            :href="asset.getFileUrl()"
                            class="dropdown-item"
                            tabindex="-1"
                            download
                            target="_blank"
                            rel="noopener"
                        >
                            <i class="fe fe-download"></i>
                            <span class="txt">{{ $t('Download') }}</span>
                        </a>
                        <div v-if="asset.isColor"
                            class="dropdown-item"
                            @click.prevent="copyToClipboard(asset.hex.toUpperCase())"
                        >
                            <i class="fe fe-copy"></i>
                            <span class="txt">{{ $t('Copy') }} HEX</span>
                        </div>
                        <div v-if="asset.isColor"
                            class="dropdown-item"
                            @click.prevent="copyToClipboard(asset.rgb.toUpperCase())"
                        >
                            <i class="fe fe-copy"></i>
                            <span class="txt">{{ $t('Copy') }} RGB</span>
                        </div>
                    </toggler>
                </div>
            </div>
        </figure>

        <div class="box-content">
            <template v-if="asset.isFile">
                <div v-if="asset.isImage"
                    class="title"
                    :title="asset.title"
                    @click.prevent="openPreviewPopup()"
                >
                    {{ asset.title }}
                </div>
                <a v-else
                    class="title"
                    target="_blank"
                    rel="noopener"
                    download
                    :href="asset.getFileUrl()"
                    :title="asset.title"
                >
                    {{ asset.title }}
                </a>

                <div class="meta">
                    <div class="meta-item txt-uppercase">{{ asset.fileExtension }}</div>

                    <div v-if="asset.isImage && assetWidth > 0 && assetHeight > 0"
                        class="meta-item"
                    >
                        {{ assetWidth }}x{{ assetHeight }}
                    </div>
                </div>
            </template>

            <template v-else>
                <div class="title cursor-default" :title="asset.title">{{ asset.title }}</div>

                <div class="meta">
                    <div class="meta-item"
                        v-tooltip.bottom="$t('Copy')"
                        @click.prevent="copyToClipboard(asset.hex.toUpperCase())"
                    >
                        {{ asset.hex.toUpperCase() }}
                    </div>
                    <div class="meta-item"
                        v-tooltip.bottom="$t('Copy')"
                        @click.prevent="copyToClipboard(asset.rgb.toUpperCase())"
                    >
                        {{ asset.rgb.toUpperCase() }}
                    </div>
                </div>
            </template>
        </div>

        <relocator v-if="asset.isImage">
            <popup class="popup-image" ref="previewPopup" :key="'asset_popup_' + asset.id">
                <template v-slot:content>
                    <img v-if="$refs.previewPopup && $refs.previewPopup.isActive"
                        :src="asset.getFileUrl('original')"
                        :alt="asset.title"
                    >
                </template>
            </popup>
        </relocator>
    </div>
</template>

<script>
import CommonHelper   from '@/utils/CommonHelper';
import GuidelineAsset from '@/models/GuidelineAsset';
import Relocator      from '@/components/Relocator';
import Popup          from '@/components/Popup';

export default {
    name: 'asset-box-preview',
    components: {
        'relocator': Relocator,
        'popup':     Popup,
    },
    props: {
        asset: {
            type:     GuidelineAsset,
            required: true,
        }
    },
    data() {
        return {
            assetWidth:  0,
            assetHeight: 0,
        }
    },
    mounted() {
        if (this.asset.isImage) {
            CommonHelper.loadImage(this.asset.getFileUrl()).then((data) => {
                this.assetWidth  = data.width;
                this.assetHeight = data.height;
            });
        }
    },
    methods: {
        copyToClipboard(text) {
            if (CommonHelper.copyToClipboard(text)) {
                this.$toast(this.$t('Successfully copied {text} to clipboard.', {text: text}));
            } else {
                this.$toast(this.$t('Failed copying {text} to clipboard.', {text: text}), 'danger');
            }
        },
        openPreviewPopup() {
            if (this.$refs.previewPopup) {
                this.$refs.previewPopup.open();
            }
        },
        closePreviewPopup() {
            if (this.$refs.previewPopup) {
                this.$refs.previewPopup.close();
            }
        },
    },
}
</script>
