---
layout: post
title: 共角比例定理
categories: 几何
tags: [三角形]
copyright: cn
book: 数学瑰宝
---

若 $\angle ABC$ 与 $\angle A'B'C'$ 相等或互补，则有

$$ \frac{S_{\triangle ABC}}{S_{\triangle A'B'C'}} = \frac{AB \cdot BC}{A'B' \cdot B'C'} （或 \frac{S_{\triangle ABC}}{AB \cdot BC} = \frac{S_{\triangle A'B'C'}}{A'B' \cdot B'C'} ）$$

<!--more-->

## 证明

把两个三角形拼在一起，让 $\angle B$ 的两边所在直线与 $\angle B'$ 的两边所在直线重合，如图所示，

||
|:-:|:-:|
|<img src="{{ site.baseurl }}{% link /pic/gongjiaobili/a.svg %}"/>|<img src="{{ site.baseurl }}{% link /pic/gongjiaobili/b.svg %}"/>|
|(a)|(b)|

其中图(a)是两角相等的情形，图(b)是两角互补的情形，两情形下都有：

$$ \frac{S_{\triangle ABC}}{S_{\triangle A'B'C'}} = \frac{S_{\triangle ABC}}{S_{\triangle A'BC}} \cdot \frac{S_{\triangle A'BC}}{S_{\triangle A'B'C'}} = \frac{AB}{A'B'} \cdot \frac{BC}{B'C'} $$

# 共角比例定理的推广

$\angle ABC$ 与 $\angle XYZ$ 相等或互补，点 $P$ 在直线 $AB$ 上且不同于 $A$，点 $Q$ 在直线 $XY$ 上且不同于 $X$，则

$$ \frac{S_{\triangle PAC}}{S_{\triangle QXZ}} = \frac{PA \cdot BC}{QX \cdot YZ} $$

## 证明

不妨设 $B$，$C$，$X$，$Y$ 共线，如图 <img src="{{ site.baseurl }}{% link /pic/gongjiaobili/c.svg %}"/>， 则

$$ \frac{S_{\triangle PAC}}{S_{\triangle QXZ}} = \frac{S_{\triangle PAC}}{S_{\triangle ZBC}} \cdot \frac{S_{\triangle ZBC}}{S_{\triangle ZXY}} \cdot \frac{S_{\triangle ZXY}}{S_{\triangle QXZ}} = \frac{PA}{ZB} \cdot \frac{BC}{XY} \cdot \frac{XY}{QX} = \frac{PA \cdot BC}{QX \cdot YZ} $$

* content
{:toc}
