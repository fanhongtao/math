---
layout: post
title: 平行线与面积关系定理
categories: 几何
tags: [平行]
copyright: cn
book: 数学瑰宝
---

若直线 $MN \px AB$，则 $S_{\triangle MAB} = S_{\triangle NAB}$；反过来，若 $S_{\triangle MAB} = S_{\triangle NAB}$，则 $MN \px AB$。

<!--more-->

## 证明

先证明前面的结论，用反证法。

若 $S_{\triangle MAB} \neq S_{\triangle NAB}$，不妨设 $S_{\triangle MAB} > S_{\triangle NAB}$，如图，<img src="{{ site.baseurl }}{% link /pic/pxx_mianji.svg %}"/> 

此时直线 $MN$ 与 $AB$ 必相交。下面证明这个结论：

事实上，对于线段 $MN$ 延长线上任一点 $P$，记 $\frac{MN}{MP} = \lambda$，由[定比分点公式]({{ site.baseurl }}{% link _posts/2018-06-22-ding-bi-fen-dian-gong-si.md %})，可知：

$$ S_{\triangle NAB} = \lambda S_{\triangle PAB} + (1 - \lambda)S_{\triangle MAB} $$

取 $\lambda = 1 - \frac{S_{\triangle NAB}}{S_{\triangle MAB}}$（因 $ S_{\triangle NAB} < S_{\triangle MAB} $，这是可以取的）代入上式得 $S_{\triangle PAB} = 0$，即直线 $AB$ 与 $MN$ 交于点 $P$。这与 $MN \px AB$ 矛盾，所以 $ S_{\triangle MAB} > S_{\triangle NAB} $ 不可能（同样可证 $ S_{\triangle MAB} < S_{\triangle NAB} $ 不可能），故

$$ S_{\triangle MAB} = S_{\triangle NAB} $$

再证反过来的结论，用反证法。

若直线 $MN$ 与 $AB$ 相交于点 $L$，则 $\frac{S_{\triangle MAB}}{S_{\triangle NAB}} = \frac{ML}{NL} > 1$，即 $ S_{\triangle MAB} > S_{\triangle NAB} $，这与题设 $ S_{\triangle MAB} = S_{\triangle NAB} $ 矛盾，从而假定直线 $MN$ 与 $AB$ 相交不成立，故 $MN \px AB$。

* content
{:toc}
