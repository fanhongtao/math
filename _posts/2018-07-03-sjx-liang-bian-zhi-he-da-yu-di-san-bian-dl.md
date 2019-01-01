---
layout: post
title: 三角形两边之和大于第三边定理
categories: 几何
tags: [三角形]
copyright: cn
book: 数学瑰宝
---

在 $\triangle ABC$ 中，$ AC + BC > AB $ ，$ AB + BC > AC $ ，$ AB + AC > BC $  。

<!--more-->

## 证法1

仅证第三式，设 $ AB < BC $， $AC < BC$ （因 $AB$，$AC$ 中有一边大于 BC，则结论显然成立）。

如图<img src="{{ site.baseurl }}{% link /pic/sjx_lianbiandayudisanbian.svg %}"/>，

在 $BC$　上取点 $M$ ，使 $BM = BA$，*（根据[等腰三角形性质定理]({{ site.baseurl }}{% link _posts/2018-06-28-dysjx-xing-zhi-ding-li.md %})）*则

$$ \angle BMA = \angle BAM $$

而 $\angle BAC < 180^\circ = \angle BMA + \angle AMC$

从而

$$\angle MAC = \angle BAC - \angle BAM = \angle BAC - \angle BMA < \angle 180^\circ - \angle BMA = \angle AMC$$

*（根据[三角形大角对大边定理]({{ site.baseurl }}{% link _posts/2018-06-29-sjx-da-jiao-dui-da-bian-ding-li.md %})）*于是 $MC < AC$

故 $ AB + AC = BM + AC > BM + MC = BC $

## 证法2

因为[大角对大边]({{ site.baseurl }}{% link _posts/2018-06-29-sjx-da-jiao-dui-da-bian-ding-li.md %})，则只要证明较小的两角对边之和大于最大角对边即可。

不妨设 $\angle A$ 不小于 $\angle B$ 和 $\angle C$，作边 $BC$ 上的高 $AD$ ，由[共角比例不等式]({{ site.baseurl }}{% link _posts/2018-06-26-gong-jiao-bi-li--bu-deng-shi.md %})，有

$$ 1 = \frac{S_{\triangle BDA}}{S_{\triangle BAD}} > \frac{BD \cdot AD}{BA \cdot AD} = \frac{BD}{BA} $$

即 $AB > BD$。 同理 $AC > DC$，故

$$ AB + AC > BD + DC = BC $$

* content
{:toc}
