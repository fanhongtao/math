---
layout: post
title: 三角形中位线定理
categories: 几何
tags: [三角形, 平行]
copyright: cn
book: 数学瑰宝
---

三角形两边中点连线平行于第三边，且等于第三边的一半。

<!--more-->

## 证明

如图：<img src="{{ site.baseurl }}{% link /pic/sjx_zhongweixian.svg %}"/>

设 $M$，$N$ 分别是 $\triangle ABC$ 的边 $AB$，$AC$ 的中点，则由 [共边比例定理]({{ site.baseurl }}{% link _posts/2018-06-20-gong-bian-bi-li-ding-li.md %}) 有

$$ S_{\triangle BNC} = \frac 1 2 S_{\triangle ABC} = S_{\triangle BMC} $$

*([平行线与面积关系定理]({{ site.baseurl }}{% link _posts/2018-06-22-ping-xing-xian-yu-mian-ji-guan-xi-ding-li.md %}))* 从而， $MN \px BC$。

*([平行线性质定理]({{ site.baseurl }}{% link _posts/2018-07-17-pxx-xzdl.md %}) 定理3)* 于是 $\angle BNM = \angle NBC$，由 [共角比例定理]({{ site.baseurl }}{% link _posts/2018-06-25-gong-jiao-bi-li--ding-li.md %}) ，有

$$ \frac {MN}{BC} = \frac {MN \cdot BN}{BC \cdot BN} = \frac {S_{\triangle NMB}}{S_{\triangle BNC}}
 = \frac {\frac 1 2 S_{\triangle ABN}}{S_{\triangle ABN}} = \frac 1 2 $$

或

$$ \frac 1 4 = \frac {AM \cdot AN}{AB \cdot AC} = \frac {S_{\triangle AMN}}{S_{\triangle ABC}}
 = \frac {AM \cdot MN}{AB \cdot BC} = \frac 1 2 \cdot \frac {MN}{BC} $$

故 $BC = 2 MN$

---
**补充**

* 由 [共边比例定理]({{ site.baseurl }}{% link _posts/2018-06-20-gong-bian-bi-li-ding-li.md %}) 有： $S_{\triangle AMN} = \frac 1 2 S_{\triangle ABN}$ 和 $S_{\triangle BNC} = S_{\triangle ABN} = \frac 1 2 S_{\triangle ABC}$

* 由 [平行线性质定理]({{ site.baseurl }}{% link _posts/2018-07-17-pxx-xzdl.md %}) 定理3 ，有： $\angle AMN = \angle ABC$ (同位角相等)，再由 [共角比例定理]({{ site.baseurl }}{% link _posts/2018-06-25-gong-jiao-bi-li--ding-li.md %}) ，有 $\frac {S_{\triangle AMN}}{S_{\triangle ABC}}
 = \frac {AM \cdot MN}{AB \cdot BC}$

---

* content
{:toc}
