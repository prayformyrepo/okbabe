<!DOCTYPE html>
<html lang="fa">

<head>
    @include('includes.panel.headLinks')

    <title> شاورنو - افزودن سوالات تست
        {{$test->name}}
    </title>

</head>

<body>

<!-- Begin page -->
<div id="wrapper">
@include('includes.panel.topBar')
@include('includes.panel.leftSideBar')



<!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page">
        <div class="content">

            <!-- Start Content-->
            <div class="container-fluid">
                @if (isset($err))
                    <div class="alert alert-danger">
                        <ul>
                            @foreach($err as $er)
                                <li>{{$er}}</li>

                            @endforeach
                        </ul>
                    </div>
                @endif
                <div class="row">
                    <div class="col-12">
                        <div class="card-box">
                            <div class="dropdown float-right">
                                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown"
                                   aria-expanded="false">
                                    <i class="mdi mdi-dots-vertical"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <!-- item-->
                                    <a href="{{route('show-select-test-page')}}" class="dropdown-item">لیست تست ها</a>

                                </div>
                            </div>
                            <h4 class="header-title">افزودن یا ویرایش سوالات</h4>

                            <div class="row">
                                <div class="col-12">
                                    <div class="p-2">
                                        <form class="form-horizontal" role="form" method="post"
                                              action="{{route('test-question-page')}}">
                                            @csrf

                                            @for($i=1;$i<=$test->questions_count;$i++)

                                                <div class="form-group row">
                                                    <label class="col-sm-2  col-form-label" for="simpleinput"
                                                           style="color: red;background-color: #0b0b0b;border-radius: 20px">سوال
                                                        شماره {{$i}}</label>
                                                    <div class="col-sm-10">
                                                        @if(isset($edit)&&$edit==true)
                                                            @php(@$q=\App\TestQuestion::where('test_id',$test->id)->where('question_number',$i)->value('question_text'))
                                                            @php(@$q_id=\App\TestQuestion::where('test_id',$test->id)->where('question_number',$i)->value('id'))
                                                        @else
                                                            <?php
                                                                @$q='q'.$i;
                                                                @$q=$request->$q;

                                                            ?>

                                                        @endif
                                                        <input type="text" id="q{{$i}}" name="q{{$i}}"
                                                               class="form-control"
                                                               placeholder="متن سوال شماره {{$i}}"
                                                               value="{{@$q}}">
                                                    </div>
                                                </div>

                                                @for($j=1;$j<=$test->answers_per_question;$j++)
                                                    <div class="row">
                                                        <div class="col-sm-1 col-1">

                                                        </div>
                                                        <div class="col-sm-11 col-11">
                                                            <div class="form-group row">
                                                                <label class="col-sm-2  col-form-label"
                                                                       for="simpleinput">گزینه شماره {{$j}}
                                                                    سوال {{$i}}</label>
                                                                <div class="col-sm-10">

                                                                    @if(isset($edit)&&$edit==true)
                                                                        @php(@$a=\App\TestAnswer::where('test_question_id',$q_id)->where('answer_number',$j)->value('answer_text'))
                                                                    @else
                                                                        <?php
                                                                        @$a='q'.$i.'a'.$j;
                                                                        @$a=$request->$q;

                                                                        ?>

                                                                    @endif

                                                                    <input type="text" id="q{{$i}}a{{$j}}"
                                                                           name="q{{$i}}a{{$j}}"
                                                                           class="form-control"
                                                                           placeholder="گزینه شماره {{$j}} سوال {{$i}}"
                                                                           value="{{@$a}}">
                                                                </div>
                                                                <div class="col-sm-2 mt-1">

                                                                </div>
                                                                <div class="col-sm-10 mt-1">


                                                                    @foreach($defaults as $default)

                                                                        <input type="button"
                                                                               class="btn btn-info waves-effect waves-light"
                                                                               value="{{$default->name}}"
                                                                               onclick="autoComplete( {{$i}} , {{$j}} , '{{$default->name}}')">
                                                                    @endforeach
                                                                </div>


                                                            </div>
                                                            @php($w='wq'.$i.'a'.$j)
                                                            @if(isset($edit)&&$edit==true)
                                                                @php(@$w=\App\TestAnswer::where('test_question_id',$q_id)->where('answer_number',$j)->value('answer_weight'))
                                                            @else
                                                                <?php
                                                                @$w='wq'.$i.'a'.$j;
                                                                @$w=$request->$w;

                                                                ?>

                                                            @endif
                                                            <div class="form-group row">
                                                                <label class="col-sm-2  col-form-label"
                                                                       for="simpleinput">امتیاز گزینه شماره {{$j}}
                                                                    سوال {{$i}}</label>
                                                                <div class="col-sm-3">
                                                                    <input type="number" id="wq{{$i}}a{{$j}}"
                                                                           name="wq{{$i}}a{{$j}}"
                                                                           class="form-control"
                                                                           placeholder="امتیاز گزینه شماره {{$j}} سوال {{$i}}"
                                                                           value="{{$w}}">
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                @endfor

                                            @endfor


                                            <div class="form-group mb-0 justify-content-end row">
                                                <div class="col-sm-12">
                                                    <button type="submit" class="btn btn-info waves-effect waves-light"
                                                            style="float: left"> ثبت سوالات
                                                    </button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </div>
                            <!-- end row -->

                        </div> <!-- end card-box -->
                    </div><!-- end col -->
                </div>
                <!-- end row -->


            </div> <!-- container-fluid -->

        </div> <!-- content -->

        @include('includes.panel.footer')

    </div>

    <!-- ============================================================== -->
    <!-- End Page content -->
    <!-- ============================================================== -->


</div>
<!-- END wrapper -->

@include('includes.panel.rightSideBar')


@include('includes.panel.footerLinks')
<script>


    function autoComplete(q, a, t) {
        console.log(q, a, t);
        $('#q' + q + 'a' + a).val(t);
    }
</script>
</body>

</html>