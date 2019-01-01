---
layout: post
title: 三角形角全等的判定定理
categories: 几何
tags: [三角形]
copyright: cn
book: 数学瑰宝
---

# 定理 1 

**（边、边、边判定定理）** 设 $\triangle ABC$ 与 $\triangle A'B'C'$ 的三条边对应相等，即 $BC = B'C'$ ，$AC = A'C'$，$AB = A'B'$，则 $\triangle ABC \qd \triangle A'B'C'$。

<!--more-->

## 证明

可由 [共角比例逆定理]({{ site.baseurl }}{% link _posts/2018-07-05-gong-jiao-bi-li-ni-ding-li.md %}) 证得三角对应相等，由此即证。

# 定理 2 

**（边、角、边判定定理）** 在 $\triangle ABC$ 与 $\triangle A'B'C'$ 中，若 $BC = B'C'$，$AC = A'C'$，$\angle C = \angle C'$，则 $\triangle ABC \qd \triangle A'B'C'$。

## 证明

由 [共角比例定理]({{ site.baseurl }}{% link _posts/2018-06-25-gong-jiao-bi-li--ding-li.md %}) 得其面积相等，或者由三角形面积公式得面积相等，设 $\angle C$ 与 $\angle C'$ 重合，则 $AB$ 与 $A'B'$ 重合，转化为边、边、边情形。

# 定理 3

**（角、边、角判定定理）** 在 $\triangle ABC$ 与 $\triangle A'B'C'$ 中，若 $\angle A = \angle A'$，$AB = A'B'$，$\angle B = \angle B'$，则 $\triangle ABC \qd \triangle A'B'C'$。

## 证明

由 [共角比例定理]({{ site.baseurl }}{% link _posts/2018-06-25-gong-jiao-bi-li--ding-li.md %}) 得其对应边相等转化为 边、边、边情形。

# 定理 4

**（角、边、边判定定理）** 在 $\triangle ABC$ 与 $\triangle A'B'C'$ 中，若 $\angle A = \angle A'$，$AB = A'B'$，$BC = B'C'$，并且 $\angle C$ 与 $\angle C'$ 不互补，则 $\triangle ABC \qd \triangle A'B'C'$。

## 证明

由 [共角比例定理]({{ site.baseurl }}{% link _posts/2018-06-25-gong-jiao-bi-li--ding-li.md %}) 有

$$ \frac {S_{\triangle ABC}}{S_{\triangle A'B'C'}} = \frac {AB \cdot AC}{A'B' \cdot A'C'} = \frac {AC}{A'C'} = \frac {AC \cdot BC}{A'C' \cdot B'C'}$$

由 [共角比例逆定理]({{ site.baseurl }}{% link _posts/2018-07-05-gong-jiao-bi-li-ni-ding-li.md %}) 得 $\angle C$ 与 $\angle C'$ 相等或互补，但题设 $\angle C$ 与 $\angle C'$ 不互补，所以 $\angle C = \angle C'$ 。由 [边、角、边定理](#定理-2)，则 $\triangle ABC \qd \triangle A'B'C'$。


* content
{:toc}
