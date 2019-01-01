---
layout: post
title: 共角比例逆定理
categories: 几何
tags: [三角形]
copyright: cn
book: 数学瑰宝
---

在 $\triangle ABC$ 和 $\triangle A'B'C'$ 中，若

$$ \frac{S_{\triangle ABC}}{S_{\triangle A'B'C'}} = \frac{AB \cdot BC}{A'B' \cdot B'C'} $$

，则 $\angle B$ 与 $\angle B'$ 相等或互补。

<!--more-->

## 证明

用反证法。假设 $\angle B$ ， $\angle B'$ 不相等也不互补，不妨设 $\angle B > \angle B'$。这时有两种情形：$\angle B + \angle B' < 180^\circ$ 或 $\angle B + \angle B' > 180^\circ$。

若 $\angle B + \angle B' < 180^\circ$，由 [共角比例不等式]({{ site.baseurl }}{% link _posts/2018-06-26-gong-jiao-bi-li--bu-deng-shi.md %}) ，得

$$ \frac{S_{\triangle ABC}}{S_{\triangle A'B'C'}} > \frac{AB \cdot BC}{A'B' \cdot B'C'} $$

这与题给条件矛盾。

若 $\angle B + \angle B' > 180^\circ$，如图

||
|:-:|:-:|
|<img src="{{ site.baseurl }}{% link /pic/gongjiaobilinidingli/a.svg %}"/>|<img src="{{ site.baseurl }}{% link /pic/gongjiaobilinidingli/b.svg %}"/>|

延长 $AB$ 至 $D$ ，使 $BD = AB$ ，延长 $A'B'$ 至 $D'$ ，使 $B'D' = A'B'$。这时，$\angle DBC + \angle D'B'C' < 180^\circ$ ，

而且 $\angle DBC = 180^\circ - \angle B <  180^\circ - \angle B' = \angle D'B'C' $。

由 [共角比例不等式]({{ site.baseurl }}{% link _posts/2018-06-26-gong-jiao-bi-li--bu-deng-shi.md %}) ，得

$$ \frac{S_{\triangle D'B'C'}}{S_{\triangle DBC}} > \frac{B'D' \cdot B'C'}{BD \cdot BC} $$

但由 [共边比例定理]({{ site.baseurl }}{% link _posts/2018-06-20-gong-bian-bi-li-ding-li.md %}) ，知

$$ S_{\triangle D'B'C'} = S_{\triangle A'B'C'} , S_{\triangle DBC} = S_{\triangle ABC} $$

且

$$ B'D' = A'B' , BD = AB $$

故上述不等式，即为

$$ \frac{S_{\triangle ABC}}{S_{\triangle A'B'C'}} < \frac{AB \cdot BC}{A'B' \cdot B'C'} $$

这也与已知题给条件矛盾。

从而假设 $\angle B$ ， $\angle B'$ 不相等也不互补不成立。

故 $\angle B$ 与 $\angle B'$ 相等或互补。

* content
{:toc}
