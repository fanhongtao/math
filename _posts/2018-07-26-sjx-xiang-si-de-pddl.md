---
layout: post
title: 三角形角相似的判定定理
categories: 几何
tags: [三角形]
copyright: cn
book: 数学瑰宝
---

# 定理 1 

**（角、角判定定理）** 在 $\triangle ABC$ 与 $\triangle A'B'C'$ 中，若 $\angle A = \angle A'$ ，$\angle B = \angle B'$，则 $\triangle ABC \xs \triangle A'B'C'$。

<!--more-->

## 证明

可由 [共角比例定理]({{ site.baseurl }}{% link _posts/2018-06-25-gong-jiao-bi-li--ding-li.md %})，注意 $\angle C = \angle C'$，有：

$$ \frac {S_{\triangle ABC}}{S_{\triangle A'B'C'}} = \frac {AB \cdot AC}{A'B' \cdot A'C'} = \frac {AB \cdot BC}{A'B' \cdot B'C'} = \frac {AC \cdot BC}{A'C' \cdot B'C'} $$

从而

$$ \frac {AC}{A'C'} = \frac {BC}{B'C'} = \frac {AB}{A'B'} $$

故

$$ \triangle ABC \xs \triangle A'B'C' $$

# 定理 2 

**（边、角、边判定定理）** 在 $\triangle ABC$ 与 $\triangle A'B'C'$ 中，若 $\angle A = \angle A'$，且有 $\frac {AC}{A'C'} = \frac {AB}{A'B'}$，则 $\triangle ABC \xs \triangle A'B'C'$。

## 证明

如图 <img src="{{ site.baseurl }}{% link /pic/sjx_xs_pddl/a.svg %}"/>

设 $\angle A$ 与 $\angle A'$ 重合，记 $\frac {AC}{A'C'} = \frac {AB}{A'B'} = k$，则由 [共角比例定理]({{ site.baseurl }}{% link _posts/2018-06-25-gong-jiao-bi-li--ding-li.md %})（或三角形面积公式） 得

$$ \frac {S_{\triangle ABC'}}{S_{\triangle ABC}} = \frac {A'C'}{AC} = \frac 1 k = \frac {A'B'}{AB} = \frac {S_{\triangle ACB'}}{S_{\triangle ABC}} $$

从而

$$ S_{\triangle ABC'} = S_{\triangle ACB'} $$

即有

$$ S_{\triangle BCB'} = S_{\triangle BCC'} $$

*（[平行线与面积关系定理]({{ site.baseurl }}{% link _posts/2018-06-22-ping-xing-xian-yu-mian-ji-guan-xi-ding-li.md %})）* 于是 $BC \px B'C'$，则 *（[平行线性质定理-定理3-同位角相等]({{ site.baseurl }}{% link _posts/2018-07-17-pxx-xzdl.md %}#定理3)）*

$$ \angle B = \angle AB'C' = \angle B' \quad,\quad \angle C = \angle AC'B' = \angle C' $$

故

$$ \triangle ABC \xs \triangle A'B'C' $$

# 定理 3

**（边、边、边判定定理）** 在 $\triangle ABC$ 与 $\triangle A'B'C'$ 中，若 $\frac {BC}{B'C'} = \frac {AC}{A'C'} = \frac {AB}{A'B'}$，则 $\triangle ABC \xs \triangle A'B'C'$。

## 证明

不妨设 $\frac {AB}{A'B'} = k > 1$，如图 <img src="{{ site.baseurl }}{% link /pic/sjx_xs_pddl/b.svg %}"/> 

在 $AB$ 上取点 $D$，在 $AC$ 上取点 $E$，使 $AD = A'B'$， $AE = A'C'$。由 [三角形相似判定条件边、角、边](#定理-2) 知 $\triangle ABC \xs \triangle ADE$，因而

$$ \frac {BC}{DE} = \frac {AB}{AD} = \frac {AB}{A'B'} = k = \frac {BC}{B'C'} $$

从而 $DE = B'C'$，*（[三角形角全等的判定定理]({{ site.baseurl }}{% link _posts/2018-07-22-sjx-quan-deng-de-pddl.md %}#定理-1)）*于是 $\triangle A'B'C' \qd \triangle ADE$，则有 $\angle A = \angle A'$，再用[三角形相似判定条件边、角、边](#定理-2)知 $\angle ABC \xs \angle A'B'C'$

* content
{:toc}
