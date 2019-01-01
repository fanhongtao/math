---
layout: post
title: 共角比例不等式
categories: 几何
tags: [三角形]
copyright: cn
book: 数学瑰宝
---

若 $\angle ABC$ > $\angle A'B'C'$ ，而且有两角之和小于 $180^\circ$，则

$$ \frac{S_{\triangle ABC}}{S_{\triangle A'B'C'}} > \frac{AB \cdot BC}{A'B' \cdot B'C'} （或 \frac{S_{\triangle ABC}}{AB \cdot BC} > \frac{S_{\triangle A'B'C'}}{A'B' \cdot B'C'} ）$$

<!--more-->

## 证明

记 $\angle ABC = \alpha$ , $\angle A'B'C' = \beta$ ，如图所示<img src="{{ site.baseurl }}{% link /pic/gongjiaobilibudengshi.svg %}"/>，

作一个顶角为 $\alpha - \beta$ 的等腰 $\triangle PQR$，延长 $QR$ 至 $S$，使 $\angle RPS = \beta$，则$\angle QPS = \alpha$，由[共角比例定理]({{ site.baseurl }}{% link _posts/2018-06-25-gong-jiao-bi-li--ding-li.md %})，有

$$ \frac{S_{\triangle ABC}}{AB \cdot BC} = \frac{S_{\triangle QPS}}{PQ \cdot PS} > \frac{S_{\triangle RPS}}{PR \cdot PS} = \frac{S_{\triangle A'B'C'}}{A'B' \cdot B'C'} $$

---

*补充：因为是等腰三角形，所以 $PQ = PR$ ，即 $PQ\cdot PS = PR\cdot PS$*

* content
{:toc}
