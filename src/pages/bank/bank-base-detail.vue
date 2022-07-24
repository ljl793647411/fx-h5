<template>
	<view class="bank-detail">
		<view class="header">
			<view class="header-top">
        <!--				<image class="bank-logo" :src="data.iconName" />-->
				<!--
          <text class="bank-text ellipsis">{{data.financialName}}</text>-->
				<text class="bank-text ellipsis">中国银行</text>
			</view>
		</view>

		<view class="content-box">
			<view class="content-top-box">
				<text class="content-top-box-text">基本信息</text>
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`编码:`}}</text>
				<text class="content-data">JQ00102</text>
				<!--      <text class="content-data">{{`${data.code}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`名称:`}}</text>
				<text class="content-data">中国银行上海市黄浦支行</text>
				<!--      <text class="content-data">{{`${data.name}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`简称:`}}</text>
				<text class="content-data">中行</text>
				<!--      <text class="content-data">{{`${data.shortName}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`英文名:`}}</text>
				<text class="content-data">Bank of China</text>
				<!--      <text class="content-data">{{`${data.enName}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`主行名称:`}}</text>
				<text class="content-data">中国银行主行</text>
				<!--      <text class="content-data">{{`${data.bankTypeName}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`国家地区:`}}</text>
				<text class="content-data">中国</text>
				<!--      <text class="content-data">{{`${data.country}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`所属地区:`}}</text>
				<text class="content-data">上海市</text>
				<!--      <text class="content-data">{{`${data.area}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`地址:`}}</text>
				<text class="content-data">上海市黄浦区长江南路180号</text>
				<!--      <text class="content-data">{{`${data.address}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`联行号:`}}</text>
				<text class="content-data">12345</text>
				<!--      <text class="content-data">{{`${data.lhh}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`SWIFT CODE:`}}</text>
				<text class="content-data">123-12-12</text>
				<!--      <text class="content-data">{{`${data.swiftcode}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`年审日期:`}}</text>
				<text class="content-data">2022-07-15</text>
				<!--      <text class="content-data">{{`${data.annualReview}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`银行A角:`}}</text>
				<text class="content-data">王</text>
				<!--      <text class="content-data">{{`${data.bankanglea_Name}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`银行B角:`}}</text>
				<text class="content-data">王</text>
				<!--      <text class="content-data">{{`${data.bankangleb_Name}`}}</text>-->
			</view>
			<view class="content-detail-box">
				<text class="content-tip">{{`备注:`}}</text>
				<text class="content-data">备注</text>
				<!--      <text class="content-data">{{`${data.note}`}}</text>-->
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		props: {
			data: {
				type: Object,
				default: () => ({})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bank-detail {
		min-height: 100vh;
    z-index: -1;
	}

	.header {
    background-image: linear-gradient(223deg, #4892F8 0%, #3F74F9 44%, #10C1F3 100%);
    height: 150px;
    border-radius: 0 0 25% 25%;
		.header-top {

			.bank-logo {
				width: 40px;
				height: 40px;
				margin-right: 20px;
			}
			.bank-text {
				font-size: 17px;
				color: #FFFFFF;
				letter-spacing: 0;
				font-weight: 500;
				margin-top: 50px;
				margin-bottom: 50px;
			}
		}
	}

	.content-box {
    margin-top: -70px;
		background: #FFFFFF;
		box-shadow: 0 2px 8px 0 rgba(81, 120, 159, 0.12);
		border-radius: 8px;
		min-height: 100vh;
    margin-left: 18px;
    margin-right: 18px;

		.content-top-box {
			width: 100%;
			padding-left: 26px;
			padding-bottom: 10px;
			border-bottom: 1px solid rgba(81, 120, 159, 0.25);

			.content-top-box-text {
				border: 3px seagreen;
				font-size: 16px;
				color: #2D2F33;
				letter-spacing: 0;
				font-weight: 500;
			}
		}

		.content-detail-box {
			display: flex;
			justify-content: space-between;
			padding-left: 26px;
			margin-top: 10px;

			.content-tip {
				letter-spacing: 0;
				font-size: 14px;
				color: #848C9A;
				font-weight: 400;
				margin-right: 100px;
				width: 30%;

			}

			.content-data {
				letter-spacing: 0;
				font-size: 14px;
				color: #2D2F33;
				font-weight: 400;
				width: 70%;
				text-align: left;
			}
		}
	}
</style>
